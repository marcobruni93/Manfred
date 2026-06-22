export type Lang = "en" | "it" | "es";

export const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      pricing: "Pricing",
      contact: "Contact",
      login: "Login",
      startFree: "Start free",
    },
    hero: {
      badge: "Lead Generation · LinkedIn Automation · B2B Outreach",
      h1: ["Find Your B2B Prospects.", "Reach Them on LinkedIn.", "Automatically."],
      sub: "Manfred identifies your ideal contacts and launches a personalized outreach sequence on LinkedIn on your behalf — from the first profile visit to the signed deal.",
      ctaPrimary: "Start for free",
      ctaSecondary: "See how it works",
      stats: [
        { val: "500+", label: "companies" },
        { val: "2M+", label: "leads found" },
        { val: "18%", label: "avg reply rate" },
        { val: "3x", label: "more demos" },
      ],
    },
    scraping: {
      badge: "Multi-Source Intelligence",
      h2: ["Find leads", "everywhere", ". Automatically."],
      sub: "Manfred aggregates data from LinkedIn, company websites, Google Maps and verified B2B databases — all in one platform, no separate tools needed.",
      sources: [
        {
          label: "LinkedIn",
          desc: "Scrape profiles, companies, posts and comment sections. Advanced filters by role, industry, team size and technologies used.",
          stat: "50M+ profiles",
        },
        {
          label: "Websites",
          desc: "Our AI crawler extracts emails, phone numbers and contacts from any company website. Import from a URL list or single domain.",
          stat: "Verified emails",
        },
        {
          label: "Google Maps",
          desc: "Find local businesses by category, geographic area and rating. Perfect for territorial outreach and regional sales reps.",
          stat: "Search by ZIP",
        },
        {
          label: "B2B Database",
          desc: "Access 50M+ contacts with verified business emails, LinkedIn URLs, firmographic data and intent signals for your ICP.",
          stat: "50M+ contacts",
        },
      ],
      liveLeads: [
        { name: "Marco R.", role: "CEO · TechFlow Ltd", tag: "LinkedIn" },
        { name: "Anna C.", role: "CMO · GrowthCo", tag: "Web Scrape" },
        { name: "Luca B.", role: "CTO · ScaleUp Inc", tag: "Database" },
        { name: "Sofia M.", role: "Head of Sales · DigitalFirst", tag: "LinkedIn" },
        { name: "Paolo F.", role: "CFO · Innovate Ltd", tag: "Maps" },
      ],
      terminalTitle: "manfred scraper — live feed",
      terminalRunning: "Running",
      terminalFooter: "5 leads found · 0.3s",
      terminalViewAll: "View all",
    },
    features: {
      label: "Features",
      h2: ["Everything you need for", "B2B prospecting"],
      cards: [
        {
          title: "Smart Prospecting",
          description: "50M+ verified profiles. Filter by industry, role, company size and location. Find your exact ideal prospects in seconds.",
          stats: [
            { val: "50M+", label: "profiles" },
            { val: "99%", label: "accuracy" },
            { val: "2M+", label: "found" },
          ],
        },
        {
          title: "LinkedIn Automation",
          description: "Automated multi-step sequences on LinkedIn. From profile visit to DM — Manfred handles the entire outreach on autopilot.",
        },
        {
          title: "Real-time Analytics",
          description: "Track opens, clicks and replies for every campaign. A/B test sequences. Optimize with real data.",
        },
        {
          title: "AI Personalization",
          description: "Every message tailored to each prospect's role, company and recent activity. No templates. No generic blasts.",
        },
        {
          title: "GDPR Compliant",
          description: "Data processed in compliance with GDPR, stored in the EU. Privacy by design on every feature.",
        },
        {
          title: "Smart Automation",
          description: "Behavioral trigger-based workflows. Contact the right lead at the exact moment they're most receptive. Stops automatically when they reply.",
        },
      ],
      bannerChips: ["Trigger", "Filter", "Send", "Analyze"],
    },
    sequence: {
      badge: "LinkedIn Automation",
      h2: ["The LinkedIn sequence", "that converts"],
      sub: "Don't send cold DMs. Manfred warms up each prospect with a series of micro-touchpoints before asking for anything — exactly like your best salesperson would.",
      steps: [
        {
          day: "Day 1",
          title: "Profile Visit",
          desc: "Manfred automatically visits the prospect's LinkedIn profile. They receive the notification and wonder \"who's this?\" — creating curiosity before a single word is written.",
          metric: "+40% reply chance",
          mockupLabel: "LinkedIn Notification",
          mockupText: "Marco B. viewed your profile",
        },
        {
          day: "Day 2–3",
          title: "Post Comment",
          desc: "Your account comments on the prospect's recent posts with relevant, value-adding content. Your name appears in their feed — organic visibility before direct contact.",
          metric: "+60% acceptance rate",
          mockupLabel: "Post comment",
          mockupText: "Great point on the mid-market opportunity 🔥",
        },
        {
          day: "Day 4–5",
          title: "Connection Request",
          desc: "Personalized connection request using dynamic variables from the prospect's profile. Sent on the day and time with the highest acceptance rate.",
          metric: "70%+ acceptance rate",
          mockupLabel: "Connection message",
          mockupText: "Hi {{name}}, I saw you work in {{industry}}...",
        },
        {
          day: "Day 6–14",
          title: "DM Sequence",
          desc: "1 to 5 direct messages with smart timing and AI personalization. When the prospect replies, automation stops automatically and you take over.",
          metric: "Auto-stop on reply",
          mockupLabel: "Direct message",
          mockupText: "Hi {{name}}, I wanted to share something with you...",
        },
      ],
      bottomText: "Set up your sequence in 5 minutes. No technical skills required.",
      bottomCta: "Create your first sequence",
    },
    testimonials: {
      label: "Testimonials",
      h2: ["What our", "500+ clients say"],
      items: [
        {
          quote: "Manfred transformed our acquisition process. In 3 months we tripled our booked demos.",
          author: "Giulia Rossi",
          role: "Head of Sales · TechSeed Ltd",
          avatar: "GR",
        },
        {
          quote: "The ROI was immediate: +40% reply rate in the first weeks. Nothing comes close to this level of automation.",
          author: "Marco Ferrari",
          role: "CEO · GrowthLab",
          avatar: "MF",
        },
        {
          quote: "As a freelancer, Manfred fills my calendar with quality B2B clients. It's like having a full sales team.",
          author: "Sara Bianchi",
          role: "Marketing Consultant · Freelance",
          avatar: "SB",
        },
      ],
    },
    cta: {
      badge: "14 days free — no credit card required",
      h2: ["Ready to transform", "your outbound?"],
      sub: "Join 500+ teams using Manfred every day to find qualified leads and close more B2B deals.",
      ctaPrimary: "Start free now",
      ctaSecondary: "See pricing →",
      trust: ["Setup in 5 minutes", "Cancel anytime", "Dedicated support", "GDPR compliant"],
    },
    footer: {
      desc: "The B2B platform to find, qualify and automatically contact your ideal prospects. Put your outbound on autopilot.",
      linkGroups: [
        {
          heading: "Product",
          links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "/pricing" },
            { label: "How it works", href: "#how-it-works" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "GDPR", href: "#" },
          ],
        },
      ],
      copyright: "All rights reserved.",
      madeWith: "Made with love in Italy 🇮🇹",
    },
  },

  it: {
    nav: {
      features: "Funzionalità",
      howItWorks: "Come funziona",
      pricing: "Prezzi",
      contact: "Contatti",
      login: "Accedi",
      startFree: "Inizia gratis",
    },
    hero: {
      badge: "Lead Generation · LinkedIn Automation · Outreach B2B",
      h1: ["Trova i tuoi prospect B2B.", "Contattali su LinkedIn.", "In automatico."],
      sub: "Manfred identifica i tuoi contatti ideali e avvia una sequenza di outreach personalizzata su LinkedIn per te — dalla prima visita al profilo fino al contratto firmato.",
      ctaPrimary: "Inizia gratis",
      ctaSecondary: "Guarda come funziona",
      stats: [
        { val: "500+", label: "aziende" },
        { val: "2M+", label: "lead trovati" },
        { val: "18%", label: "tasso risposta medio" },
        { val: "3x", label: "più demo" },
      ],
    },
    scraping: {
      badge: "Ricerca Multi-Sorgente",
      h2: ["Trova lead", "ovunque", ". Automaticamente."],
      sub: "Manfred aggrega dati da LinkedIn, siti web aziendali, Google Maps e database B2B verificati — tutto in un'unica piattaforma, senza strumenti separati.",
      sources: [
        {
          label: "LinkedIn",
          desc: "Scraping di profili, aziende, post e sezioni commenti. Filtri avanzati per ruolo, settore, dimensione team e tecnologie usate.",
          stat: "50M+ profili",
        },
        {
          label: "Siti Web",
          desc: "Il nostro crawler AI estrae email, numeri di telefono e contatti da qualsiasi sito aziendale. Import da lista URL o dominio singolo.",
          stat: "Email verificate",
        },
        {
          label: "Google Maps",
          desc: "Trova aziende locali per categoria, zona geografica e valutazione. Ideale per outreach territoriale e agenti commerciali di zona.",
          stat: "Ricerca per CAP",
        },
        {
          label: "Database B2B",
          desc: "Accesso a 50M+ contatti verificati con email aziendale, LinkedIn URL, dati firmografici e intent data per il tuo ICP.",
          stat: "50M+ contatti",
        },
      ],
      liveLeads: [
        { name: "Marco R.", role: "CEO · TechFlow SRL", tag: "LinkedIn" },
        { name: "Anna C.", role: "CMO · GrowthCo", tag: "Web Scrape" },
        { name: "Luca B.", role: "CTO · ScaleUp SpA", tag: "Database" },
        { name: "Sofia M.", role: "Head of Sales · DigitalFirst", tag: "LinkedIn" },
        { name: "Paolo F.", role: "CFO · Innovate SRL", tag: "Maps" },
      ],
      terminalTitle: "manfred scraper — live feed",
      terminalRunning: "Attivo",
      terminalFooter: "5 lead trovati · 0.3s",
      terminalViewAll: "Vedi tutti",
    },
    features: {
      label: "Funzionalità",
      h2: ["Tutto ciò che ti serve per", "la prospecting B2B"],
      cards: [
        {
          title: "Ricerca Intelligente",
          description: "50M+ profili verificati. Filtra per industria, ruolo, dimensione aziendale e location. Trova esattamente i tuoi prospect ideali in pochi secondi.",
          stats: [
            { val: "50M+", label: "profili" },
            { val: "99%", label: "accuratezza" },
            { val: "2M+", label: "trovati" },
          ],
        },
        {
          title: "LinkedIn Automation",
          description: "Sequenze automatizzate multi-step su LinkedIn. Dalla visita al profilo al DM — Manfred gestisce tutto l'outreach in pilota automatico.",
        },
        {
          title: "Analytics in Tempo Reale",
          description: "Monitora aperture, click e risposte per ogni campagna. A/B test sulle sequenze. Ottimizza con dati concreti.",
        },
        {
          title: "Personalizzazione AI",
          description: "Ogni messaggio adattato al ruolo, all'azienda e all'attività recente di ogni prospect. Niente template. Niente blast generici.",
        },
        {
          title: "GDPR Compliant",
          description: "Dati trattati in conformità GDPR, archiviati in EU. Privacy by design su ogni funzionalità.",
        },
        {
          title: "Automazione Intelligente",
          description: "Workflow basati su trigger comportamentali. Contatta il lead giusto nel momento esatto. Si ferma automaticamente quando risponde.",
        },
      ],
      bannerChips: ["Trigger", "Filtra", "Invia", "Analizza"],
    },
    sequence: {
      badge: "LinkedIn Automation",
      h2: ["La sequenza LinkedIn", "che converte"],
      sub: "Non inviare DM a freddo. Manfred scalda il prospect con una sequenza di micro-touchpoint prima di chiedere qualcosa — esattamente come farebbe il tuo miglior commerciale.",
      steps: [
        {
          day: "Giorno 1",
          title: "Visita del profilo",
          desc: "Manfred visita automaticamente il profilo LinkedIn del prospect. Lui riceve la notifica e si chiede \"chi è?\" — crei curiosità prima ancora di scrivere una parola.",
          metric: "+40% chance di risposta",
          mockupLabel: "Notifica LinkedIn",
          mockupText: "Marco B. ha visitato il tuo profilo",
        },
        {
          day: "Giorno 2–3",
          title: "Commento sui post",
          desc: "Il tuo account commenta i post recenti del prospect con commenti pertinenti e di valore. Il tuo nome appare nel suo feed — visibilità organica prima del contatto diretto.",
          metric: "+60% acceptance rate",
          mockupLabel: "Commento al post",
          mockupText: "Ottimo punto sul mercato mid-market 🔥",
        },
        {
          day: "Giorno 4–5",
          title: "Invito di connessione",
          desc: "Richiesta di connessione personalizzata con variabili dinamiche dal profilo del prospect. Inviata nel giorno e nell'ora con il più alto tasso di accettazione.",
          metric: "70%+ acceptance rate",
          mockupLabel: "Messaggio di connessione",
          mockupText: "Ciao {{nome}}, ho visto che lavori su {{settore}}...",
        },
        {
          day: "Giorno 6–14",
          title: "Sequenza DM",
          desc: "Da 1 a 5 messaggi diretti con timing intelligente e personalizzazione AI. Se il prospect risponde, l'automazione si ferma automaticamente e passi tu.",
          metric: "Stop automatico se risponde",
          mockupLabel: "Messaggio diretto",
          mockupText: "Ciao {{nome}}, volevo condividere con te...",
        },
      ],
      bottomText: "Configura la sequenza in 5 minuti. Nessuna competenza tecnica richiesta.",
      bottomCta: "Crea la tua prima sequenza",
    },
    testimonials: {
      label: "Testimonianze",
      h2: ["Cosa dicono i nostri", "500+ clienti"],
      items: [
        {
          quote: "Manfred ha trasformato il nostro processo di acquisizione. In 3 mesi abbiamo triplicato le demo prenotate.",
          author: "Giulia Rossi",
          role: "Head of Sales · TechSeed SRL",
          avatar: "GR",
        },
        {
          quote: "Il ROI è stato immediato: +40% di risposte nelle prime settimane. Niente si avvicina a questo livello di automazione.",
          author: "Marco Ferrari",
          role: "CEO · GrowthLab",
          avatar: "MF",
        },
        {
          quote: "Come freelance, Manfred riempie il mio calendario di clienti B2B di qualità. È come avere un intero team commerciale.",
          author: "Sara Bianchi",
          role: "Consulente Marketing · Freelance",
          avatar: "SB",
        },
      ],
    },
    cta: {
      badge: "14 giorni gratis — nessuna carta di credito",
      h2: ["Pronto a trasformare", "il tuo outbound?"],
      sub: "Unisciti a 500+ team che usano Manfred ogni giorno per trovare lead qualificati e chiudere più contratti B2B.",
      ctaPrimary: "Inizia gratis ora",
      ctaSecondary: "Vedi i prezzi →",
      trust: ["Setup in 5 minuti", "Cancella quando vuoi", "Supporto dedicato", "GDPR compliant"],
    },
    footer: {
      desc: "La piattaforma B2B per trovare, qualificare e contattare automaticamente i tuoi prospect ideali. Metti il tuo outbound in pilota automatico.",
      linkGroups: [
        {
          heading: "Prodotto",
          links: [
            { label: "Funzionalità", href: "#features" },
            { label: "Prezzi", href: "/pricing" },
            { label: "Come funziona", href: "#how-it-works" },
          ],
        },
        {
          heading: "Azienda",
          links: [
            { label: "Chi siamo", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Carriere", href: "#" },
          ],
        },
        {
          heading: "Legale",
          links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Termini di servizio", href: "#" },
            { label: "GDPR", href: "#" },
          ],
        },
      ],
      copyright: "Tutti i diritti riservati.",
      madeWith: "Fatto con amore in Italia 🇮🇹",
    },
  },

  es: {
    nav: {
      features: "Funciones",
      howItWorks: "Cómo funciona",
      pricing: "Precios",
      contact: "Contacto",
      login: "Iniciar sesión",
      startFree: "Empieza gratis",
    },
    hero: {
      badge: "Generación de Leads · LinkedIn Automation · Outreach B2B",
      h1: ["Encuentra tus prospectos B2B.", "Contáctalos en LinkedIn.", "Automáticamente."],
      sub: "Manfred identifica tus contactos ideales y lanza una secuencia de outreach personalizada en LinkedIn en tu nombre — desde la primera visita al perfil hasta el contrato firmado.",
      ctaPrimary: "Empieza gratis",
      ctaSecondary: "Ver cómo funciona",
      stats: [
        { val: "500+", label: "empresas" },
        { val: "2M+", label: "leads encontrados" },
        { val: "18%", label: "tasa de respuesta media" },
        { val: "3x", label: "más demos" },
      ],
    },
    scraping: {
      badge: "Inteligencia Multi-Fuente",
      h2: ["Encuentra leads", "en todas partes", ". Automáticamente."],
      sub: "Manfred agrega datos de LinkedIn, sitios web de empresas, Google Maps y bases de datos B2B verificadas — todo en una sola plataforma, sin herramientas separadas.",
      sources: [
        {
          label: "LinkedIn",
          desc: "Scraping de perfiles, empresas, publicaciones y secciones de comentarios. Filtros avanzados por rol, sector, tamaño de equipo y tecnologías usadas.",
          stat: "50M+ perfiles",
        },
        {
          label: "Sitios Web",
          desc: "Nuestro crawler AI extrae emails, teléfonos y contactos de cualquier sitio web empresarial. Importa desde lista de URLs o dominio único.",
          stat: "Emails verificados",
        },
        {
          label: "Google Maps",
          desc: "Encuentra empresas locales por categoría, zona geográfica y valoración. Ideal para outreach territorial y representantes de ventas regionales.",
          stat: "Buscar por ZIP",
        },
        {
          label: "Base de Datos B2B",
          desc: "Acceso a 50M+ contactos verificados con email empresarial, LinkedIn URL, datos firmográficos e intent data para tu ICP.",
          stat: "50M+ contactos",
        },
      ],
      liveLeads: [
        { name: "Carlos R.", role: "CEO · TechFlow SL", tag: "LinkedIn" },
        { name: "Ana C.", role: "CMO · GrowthCo", tag: "Web Scrape" },
        { name: "Luis B.", role: "CTO · ScaleUp SA", tag: "Database" },
        { name: "Sofia M.", role: "Head of Sales · DigitalFirst", tag: "LinkedIn" },
        { name: "Pablo F.", role: "CFO · Innovate SL", tag: "Maps" },
      ],
      terminalTitle: "manfred scraper — live feed",
      terminalRunning: "Activo",
      terminalFooter: "5 leads encontrados · 0.3s",
      terminalViewAll: "Ver todos",
    },
    features: {
      label: "Funciones",
      h2: ["Todo lo que necesitas para", "la prospección B2B"],
      cards: [
        {
          title: "Prospección Inteligente",
          description: "50M+ perfiles verificados. Filtra por industria, rol, tamaño de empresa y ubicación. Encuentra exactamente tus prospectos ideales en segundos.",
          stats: [
            { val: "50M+", label: "perfiles" },
            { val: "99%", label: "precisión" },
            { val: "2M+", label: "encontrados" },
          ],
        },
        {
          title: "LinkedIn Automation",
          description: "Secuencias automatizadas multi-paso en LinkedIn. Desde la visita al perfil hasta el DM — Manfred gestiona todo el outreach en piloto automático.",
        },
        {
          title: "Analíticas en Tiempo Real",
          description: "Monitoriza aperturas, clics y respuestas de cada campaña. Tests A/B en secuencias. Optimiza con datos reales.",
        },
        {
          title: "Personalización con IA",
          description: "Cada mensaje adaptado al rol, empresa y actividad reciente de cada prospecto. Sin plantillas. Sin mensajes genéricos.",
        },
        {
          title: "Cumplimiento GDPR",
          description: "Datos tratados conforme al GDPR, almacenados en la UE. Privacidad por diseño en cada función.",
        },
        {
          title: "Automatización Inteligente",
          description: "Flujos de trabajo basados en triggers de comportamiento. Contacta al lead correcto en el momento exacto. Se detiene automáticamente cuando responden.",
        },
      ],
      bannerChips: ["Trigger", "Filtrar", "Enviar", "Analizar"],
    },
    sequence: {
      badge: "LinkedIn Automation",
      h2: ["La secuencia de LinkedIn", "que convierte"],
      sub: "No envíes DMs en frío. Manfred calienta al prospecto con una serie de micro-touchpoints antes de pedir nada — exactamente como lo haría tu mejor comercial.",
      steps: [
        {
          day: "Día 1",
          title: "Visita al perfil",
          desc: "Manfred visita automáticamente el perfil LinkedIn del prospecto. Recibe la notificación y se pregunta \"¿quién es?\" — generas curiosidad antes de escribir una sola palabra.",
          metric: "+40% probabilidad de respuesta",
          mockupLabel: "Notificación LinkedIn",
          mockupText: "Marco B. visitó tu perfil",
        },
        {
          day: "Día 2–3",
          title: "Comentario en posts",
          desc: "Tu cuenta comenta las publicaciones recientes del prospecto con contenido relevante y de valor. Tu nombre aparece en su feed — visibilidad orgánica antes del contacto directo.",
          metric: "+60% tasa de aceptación",
          mockupLabel: "Comentario al post",
          mockupText: "Gran punto sobre el mercado mid-market 🔥",
        },
        {
          day: "Día 4–5",
          title: "Solicitud de conexión",
          desc: "Solicitud de conexión personalizada con variables dinámicas del perfil del prospecto. Enviada el día y hora con mayor tasa de aceptación.",
          metric: "70%+ tasa de aceptación",
          mockupLabel: "Mensaje de conexión",
          mockupText: "Hola {{nombre}}, vi que trabajas en {{sector}}...",
        },
        {
          day: "Día 6–14",
          title: "Secuencia de DMs",
          desc: "De 1 a 5 mensajes directos con timing inteligente y personalización AI. Cuando el prospecto responde, la automatización se detiene automáticamente y tú tomas el control.",
          metric: "Parada automática al responder",
          mockupLabel: "Mensaje directo",
          mockupText: "Hola {{nombre}}, quería compartir algo contigo...",
        },
      ],
      bottomText: "Configura tu secuencia en 5 minutos. Sin conocimientos técnicos.",
      bottomCta: "Crea tu primera secuencia",
    },
    testimonials: {
      label: "Testimonios",
      h2: ["Lo que dicen nuestros", "500+ clientes"],
      items: [
        {
          quote: "Manfred transformó nuestro proceso de captación. En 3 meses triplicamos las demos reservadas.",
          author: "Giulia Rossi",
          role: "Head of Sales · TechSeed Ltd",
          avatar: "GR",
        },
        {
          quote: "El ROI fue inmediato: +40% de respuestas en las primeras semanas. Nada se acerca a este nivel de automatización.",
          author: "Marco Ferrari",
          role: "CEO · GrowthLab",
          avatar: "MF",
        },
        {
          quote: "Como freelance, Manfred llena mi agenda de clientes B2B de calidad. Es como tener un equipo comercial completo.",
          author: "Sara Bianchi",
          role: "Marketing Consultant · Freelance",
          avatar: "SB",
        },
      ],
    },
    cta: {
      badge: "14 días gratis — sin tarjeta de crédito",
      h2: ["¿Listo para transformar", "tu outbound?"],
      sub: "Únete a 500+ equipos que usan Manfred cada día para encontrar leads calificados y cerrar más contratos B2B.",
      ctaPrimary: "Empieza gratis ahora",
      ctaSecondary: "Ver precios →",
      trust: ["Configuración en 5 min", "Cancela cuando quieras", "Soporte dedicado", "GDPR compliant"],
    },
    footer: {
      desc: "La plataforma B2B para encontrar, calificar y contactar automáticamente a tus prospectos ideales. Pon tu outbound en piloto automático.",
      linkGroups: [
        {
          heading: "Producto",
          links: [
            { label: "Funciones", href: "#features" },
            { label: "Precios", href: "/pricing" },
            { label: "Cómo funciona", href: "#how-it-works" },
          ],
        },
        {
          heading: "Empresa",
          links: [
            { label: "Sobre nosotros", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Empleo", href: "#" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Política de privacidad", href: "#" },
            { label: "Términos de servicio", href: "#" },
            { label: "GDPR", href: "#" },
          ],
        },
      ],
      copyright: "Todos los derechos reservados.",
      madeWith: "Hecho con amor en Italia 🇮🇹",
    },
  },
} as const;

export type LangT = (typeof translations)[Lang];
