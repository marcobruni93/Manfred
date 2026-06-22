import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, Filter, LinkedinIcon, Mail, Phone } from "lucide-react";

const mockLeads = [
  { id: "1", first_name: "Luca", last_name: "Moretti", company: "TechFlow SRL", role: "CEO", email: "l.moretti@techflow.it", linkedin_url: "#", status: "replied", campaign: "SaaS Founders Italia" },
  { id: "2", first_name: "Anna", last_name: "Conti", company: "GrowthCo", role: "CMO", email: "a.conti@growthco.com", linkedin_url: "#", status: "contacted", campaign: "SaaS Founders Italia" },
  { id: "3", first_name: "Marco", last_name: "Esposito", company: "ScaleUp SpA", role: "CTO", email: null, linkedin_url: "#", status: "new", campaign: "CFO Mid-Market" },
  { id: "4", first_name: "Sofia", last_name: "Romano", company: "DigitalFirst", role: "Head of Sales", email: "s.romano@digitalfirst.it", linkedin_url: "#", status: "qualified", campaign: "SaaS Founders Italia" },
  { id: "5", first_name: "Paolo", last_name: "Ferrari", company: "Innovate SRL", role: "CFO", email: "p.ferrari@innovate.it", linkedin_url: "#", status: "disqualified", campaign: "CFO Mid-Market" },
  { id: "6", first_name: "Elena", last_name: "Bianchi", company: "StartupXYZ", role: "CEO", email: "e.bianchi@startupxyz.io", linkedin_url: "#", status: "new", campaign: "SaaS Founders Italia" },
];

const statusConfig = {
  new: { label: "Nuovo", variant: "secondary" as const },
  contacted: { label: "Contattato", variant: "default" as const },
  replied: { label: "Risposto", variant: "success" as const },
  qualified: { label: "Qualificato", variant: "success" as const },
  disqualified: { label: "Escluso", variant: "warning" as const },
};

export default async function LeadsPage() {
  const user = { email: "marco@azienda.it" };

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header
        title="Lead"
        description="Gestisci i tuoi contatti B2B"
        userEmail={user?.email}
      />

      <main className="flex-1 p-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Cerca per nome, azienda, email..." className="pl-9" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-44">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Stato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tutti</SelectItem>
              <SelectItem value="new">Nuovi</SelectItem>
              <SelectItem value="contacted">Contattati</SelectItem>
              <SelectItem value="replied">Risposto</SelectItem>
              <SelectItem value="qualified">Qualificati</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Campagna" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tutte le campagne</SelectItem>
              <SelectItem value="1">SaaS Founders Italia</SelectItem>
              <SelectItem value="2">CFO Mid-Market</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Esporta
          </Button>
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Contatto</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">Azienda</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell">Campagna</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Stato</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">Canali</th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {mockLeads.map((lead, i) => {
                const config = statusConfig[lead.status as keyof typeof statusConfig];
                return (
                  <tr
                    key={lead.id}
                    className={`border-b border-border hover:bg-muted/30 transition-colors ${
                      i === mockLeads.length - 1 ? "border-0" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                          {lead.first_name[0]}{lead.last_name[0]}
                        </div>
                        <div>
                          <p className="font-medium">{lead.first_name} {lead.last_name}</p>
                          <p className="text-xs text-muted-foreground">{lead.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-muted-foreground">{lead.company}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-xs text-muted-foreground">{lead.campaign}</span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={config.variant} className="text-xs">
                        {config.label}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <div className="flex gap-1">
                        {lead.email && (
                          <button className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                            <Mail className="h-3.5 w-3.5" />
                          </button>
                        )}
                        {lead.linkedin_url && (
                          <button className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                            <LinkedinIcon className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button size="sm" variant="ghost">
                        Dettagli
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <span>Mostrando 6 di 2.847 lead</span>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" disabled>
              Precedente
            </Button>
            <Button size="sm" variant="outline">
              Successivo
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
