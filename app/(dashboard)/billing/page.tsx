import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, CreditCard, Download, ArrowUpRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 49,
    current: true,
    features: ["500 lead/mese", "3 campagne", "Email outreach", "Supporto email"],
  },
  {
    name: "Pro",
    price: 149,
    current: false,
    popular: true,
    features: ["5.000 lead/mese", "Campagne illimitate", "Email + LinkedIn", "Unipile", "Analytics avanzate", "Supporto prioritario"],
  },
  {
    name: "Enterprise",
    price: 499,
    current: false,
    features: ["Lead illimitati", "Tutto incluso", "API access", "Account manager", "SLA 99.9%"],
  },
];

const invoices = [
  { id: "INV-2026-06", date: "2026-06-01", amount: "€49,00", status: "Pagata" },
  { id: "INV-2026-05", date: "2026-05-01", amount: "€49,00", status: "Pagata" },
  { id: "INV-2026-04", date: "2026-04-01", amount: "€49,00", status: "Pagata" },
];

export default async function BillingPage() {
  const user = { email: "marco@azienda.it" };

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header
        title="Abbonamento & Fatturazione"
        description="Gestisci il tuo piano e i metodi di pagamento"
        userEmail={user?.email}
      />

      <main className="flex-1 p-6 space-y-6 max-w-4xl">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Piano Starter
                  <Badge className="text-xs">Attivo</Badge>
                </CardTitle>
                <CardDescription className="mt-1">
                  Il tuo abbonamento si rinnova il <strong>21 luglio 2026</strong> · €49,00/mese
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Gestisci pagamento
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Lead questo mese</span>
                  <span className="font-semibold">347 / 500</span>
                </div>
                <Progress value={69} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Campagne attive</span>
                  <span className="font-semibold">2 / 3</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-lg font-semibold mb-4">Cambia piano</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.popular ? "border-primary shadow-sm" : ""
                } ${plan.current ? "opacity-75" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="text-xs px-3">Consigliato</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-black">€{plan.price}</span>
                    <span className="text-muted-foreground text-sm">/mese</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-3.5 w-3.5 text-green-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4"
                    variant={plan.current ? "outline" : plan.popular ? "default" : "outline"}
                    disabled={plan.current}
                  >
                    {plan.current ? "Piano attuale" : (
                      <>
                        Passa a {plan.name}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Storico fatture</h2>
          <Card>
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Fattura</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Data</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Importo</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Stato</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">Azione</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv, i) => (
                    <tr
                      key={inv.id}
                      className={`border-b border-border hover:bg-muted/30 transition-colors ${
                        i === invoices.length - 1 ? "border-0" : ""
                      }`}
                    >
                      <td className="px-4 py-3 font-medium">{inv.id}</td>
                      <td className="px-4 py-3 text-muted-foreground">{inv.date}</td>
                      <td className="px-4 py-3 font-semibold">{inv.amount}</td>
                      <td className="px-4 py-3">
                        <Badge variant="success" className="text-xs">{inv.status}</Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button size="sm" variant="ghost">
                          <Download className="h-3.5 w-3.5 mr-1.5" />
                          PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <Card className="border-destructive/30 bg-destructive/5">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-sm text-destructive">Cancella abbonamento</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                L&apos;account resterà attivo fino alla scadenza del periodo di fatturazione.
              </p>
            </div>
            <Button size="sm" variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive shrink-0">
              Cancella piano
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
