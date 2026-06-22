import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Prezzi",
  description: "Scegli il piano LeadFlow più adatto alle tue esigenze. Prova gratuita di 14 giorni.",
};

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Perfetto per freelance e piccoli team",
    features: [
      "500 lead al mese",
      "3 campagne attive",
      "Email outreach",
      "Analytics di base",
      "Supporto via email",
    ],
    notIncluded: ["LinkedIn outreach", "Integrazione Unipile", "API access"],
    cta: "Inizia con Starter",
    popular: false,
  },
  {
    name: "Pro",
    price: 149,
    description: "Per team in crescita che vogliono scalare",
    features: [
      "5.000 lead al mese",
      "Campagne illimitate",
      "Email + LinkedIn outreach",
      "Integrazione Unipile",
      "Analytics avanzate",
      "A/B testing sequenze",
      "Supporto prioritario",
    ],
    notIncluded: ["API access"],
    cta: "Inizia con Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 499,
    description: "Per grandi organizzazioni con esigenze custom",
    features: [
      "Lead illimitati",
      "Campagne illimitate",
      "Tutti i canali outreach",
      "Integrazione Unipile",
      "API access",
      "Analytics custom",
      "Account manager dedicato",
      "SLA garantito 99.9%",
      "Onboarding personalizzato",
    ],
    notIncluded: [],
    cta: "Contattaci",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Prezzi trasparenti</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Il piano giusto per ogni business
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Inizia gratis con 14 giorni di prova. Nessuna carta di credito richiesta.
                Cancella in qualsiasi momento.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col ${
                    plan.popular
                      ? "border-primary shadow-lg shadow-primary/10 scale-105"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1">
                        <Zap className="mr-1 h-3 w-3" />
                        Più popolare
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-black">&euro;{plan.price}</span>
                      <span className="text-muted-foreground">/mese</span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3 mt-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground line-through">
                          <span className="h-4 w-4 shrink-0 text-center">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href={plan.name === "Enterprise" ? "#" : "/register"}>
                        {plan.cta}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-lg font-semibold mb-8">Domande frequenti</h3>
              <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto text-left">
                {[
                  {
                    q: "Posso cambiare piano in qualsiasi momento?",
                    a: "Sì, puoi fare upgrade o downgrade del tuo piano in qualsiasi momento. I cambiamenti sono effettivi immediatamente.",
                  },
                  {
                    q: "Come funziona la prova gratuita?",
                    a: "Hai 14 giorni per testare tutte le funzionalità del piano Pro. Nessuna carta richiesta, nessun addebito automatico.",
                  },
                  {
                    q: "I miei dati sono al sicuro?",
                    a: "Assolutamente sì. Tutti i dati sono crittografati e archiviati in Europa, in conformità con il GDPR.",
                  },
                  {
                    q: "Cosa succede se supero il limite di lead?",
                    a: "Ti avvisiamo prima di raggiungere il limite e puoi fare upgrade al piano successivo con un click.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="rounded-lg border border-border p-4">
                    <p className="font-semibold text-sm mb-2">{faq.q}</p>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
