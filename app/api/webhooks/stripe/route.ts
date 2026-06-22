import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createServerClient } from "@supabase/ssr";

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 });
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  );

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      const priceId = subscription.items.data[0]?.price.id;
      let plan: string | null = null;

      if (priceId === process.env.STRIPE_STARTER_PRICE_ID) plan = "starter";
      else if (priceId === process.env.STRIPE_PRO_PRICE_ID) plan = "pro";
      else if (priceId === process.env.STRIPE_ENTERPRISE_PRICE_ID) plan = "enterprise";

      await supabase
        .from("profiles")
        .update({
          plan,
          stripe_subscription_id: subscription.id,
          subscription_status: subscription.status,
        })
        .eq("stripe_customer_id", customerId);
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      await supabase
        .from("profiles")
        .update({
          plan: null,
          stripe_subscription_id: null,
          subscription_status: "canceled",
        })
        .eq("stripe_customer_id", customerId);
      break;
    }

    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.mode === "subscription" && session.customer && session.metadata?.user_id) {
        await supabase
          .from("profiles")
          .update({ stripe_customer_id: session.customer as string })
          .eq("id", session.metadata.user_id);
      }
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
