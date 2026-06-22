import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export const PLANS = {
  starter: {
    name: "Starter",
    description: "Perfetto per freelance e piccoli team",
    price: 49,
    priceId: process.env.STRIPE_STARTER_PRICE_ID!,
    features: [
      "500 lead al mese",
      "3 campagne attive",
      "Email outreach",
      "Supporto via email",
    ],
    limits: { leads: 500, campaigns: 3 },
  },
  pro: {
    name: "Pro",
    description: "Per team in crescita",
    price: 149,
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    features: [
      "5.000 lead al mese",
      "Campagne illimitate",
      "Email + LinkedIn outreach",
      "Integrazione Unipile",
      "Analytics avanzate",
      "Supporto prioritario",
    ],
    limits: { leads: 5000, campaigns: -1 },
  },
  enterprise: {
    name: "Enterprise",
    description: "Per grandi organizzazioni",
    price: 499,
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID!,
    features: [
      "Lead illimitati",
      "Campagne illimitate",
      "Tutti i canali outreach",
      "API access",
      "Account manager dedicato",
      "SLA garantito",
      "Onboarding personalizzato",
    ],
    limits: { leads: -1, campaigns: -1 },
  },
} as const;
