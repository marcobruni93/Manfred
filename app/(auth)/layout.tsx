import Link from "next/link";
import { Zap } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex-col justify-between p-12 text-white">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span>LeadFlow</span>
        </Link>

        <div>
          <blockquote className="text-2xl font-medium leading-relaxed mb-6">
            &ldquo;LeadFlow ci ha aiutato a triplicare le demo prenotate in soli 3 mesi.
            È diventato uno strumento indispensabile per il nostro team commerciale.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
              GR
            </div>
            <div>
              <p className="font-semibold">Giulia Rossi</p>
              <p className="text-indigo-200 text-sm">Head of Sales · TechSeed SRL</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { value: "500+", label: "Aziende" },
            { value: "2M+", label: "Lead trovati" },
            { value: "18%", label: "Tasso risposta medio" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black">{stat.value}</p>
              <p className="text-indigo-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span>LeadFlow</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
