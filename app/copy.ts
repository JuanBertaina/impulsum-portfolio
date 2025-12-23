import {IconBrandFacebook, IconBrandLinkedin, IconBrandWhatsapp, IconBrandX} from "@tabler/icons-react";
import type {Language, SectionId} from "./types";

export const navOrder: SectionId[] = [
	"propuesta",
	"services",
	"solutions",
	"technologies",
	"clients",
	"blog",
	"contact",
];

export const socialLinks = [
	{href: "https://twitter.com/impulsum-latam/", label: "X (Twitter)", icon: IconBrandX},
	{href: "https://www.linkedin.com/company/impulsum-latam/", label: "LinkedIn", icon: IconBrandLinkedin},
	{href: "https://facebook.com/impulsum-latam/", label: "Facebook", icon: IconBrandFacebook},
	{href: "https://wa.me/5493572667519", label: "WhatsApp", icon: IconBrandWhatsapp},
] as const;

export const heroStats = [
	{label: "Time-to-pilot", value: "4-6 semanas"},
	{label: "Adopción", value: "+70% equipos"},
	{label: "Cobertura", value: "Ops · Ventas · Finanzas"},
];

export const technologyLogos = [
	{name: "Microsoft 365", short: "M365", logo: "/logos/microsoft-365.svg"},
	{name: "Copilot", short: "CPLT", logo: "/logos/microsoft-copilot.svg"},
	{name: "Power BI", short: "PBI", logo: "/logos/power-bi.svg"},
	{name: "Power Automate", short: "PA", logo: "/logos/power-automate.svg"},
	{name: "Power Apps", short: "PApps", logo: "/logos/power-apps.svg"},
	{name: "Copilot Studio", short: "C.Studio", logo: "/logos/copilot-studio.svg"},
	{name: "Dataverse", short: "DV", logo: "/logos/dataverse.png"},
	{name: "SharePoint", short: "SP", logo: "/logos/sharepoint.svg"},
	{name: "Azure", short: "AZ", logo: "/logos/azure.svg"},
	{name: "GCP", short: "GCP", logo: "/logos/gcp.svg"},
	{name: "AWS", short: "AWS", logo: "/logos/aws.svg"},
	{name: "Redshift", short: "RS", logo: "/logos/redshift.svg"},
	{name: "SQL Server", short: "SQL", logo: "/logos/sql-server.svg"},
];

const baseEs = {
	nav: {
		propuesta: "Nosotros",
		services: "Servicios",
		solutions: "Soluciones",
		technologies: "Tecnologías",
		clients: "Clientes",
		blog: "Ideas",
		contact: "Contacto",
	},
	heroTitle: "Impulsamos decisiones inteligentes con datos, automatización e IA.",
	heroLead:
		"Modernizamos la operación diaria integrando Microsoft 365, Power Platform, Copilot, datos y automatización para lograr eficiencia real y resultados medibles.",
	heroCTA: "Impulsum tu próximo salto digital",
	heroSecondary: "Ver nuestro enfoque",
	heroBadges: ["Microsoft 365", "Power Platform", "Copilot for Work"],
	valueTitle: "Consultoría que entrega resultados medibles",
	valueBody:
		"No vendemos tecnología: entregamos eficiencia, innovación y equipos listos para liderar el futuro. Pilotos en semanas, adopción real y gobierno desde el día uno.",
	servicesIntro: "Equipo Microsoft-first desde Córdoba con alcance global; desplegamos en semanas, no meses.",
	impulsumLetters: [
		{letter: "I", title: "Insight", detail: "Detectamos oportunidades con datos y entrevistas."},
		{letter: "M", title: "Model", detail: "Diseñamos arquitectura, procesos y gobierno."},
		{letter: "P", title: "Pilot", detail: "Probamos impacto con un caso de alto valor."},
		{letter: "U", title: "Unify", detail: "Integramos datos, sistemas y flujos."},
		{letter: "L", title: "Launch", detail: "Llevamos la solución a producción."},
		{letter: "S", title: "Scale", detail: "Extendemos a más áreas con gobernanza."},
		{letter: "U", title: "Upskill", detail: "Entrenamos equipos y líderes."},
		{letter: "M", title: "Measure", detail: "Medimos impacto y optimizamos."},
	],
	services: [
		{title: "Impulsum Advisory", description: "Estrategia y gobierno en Microsoft 365 y Copilot."},
		{title: "Impulsum Agents", description: "Agentes de IA y copilotos adaptados a tus procesos reales."},
		{title: "Impulsum BI", description: "ETL/ELT, Data Warehouse y analítica con Power BI."},
		{title: "Impulsum Automate", description: "Orquestación de procesos con Power Automate y Logic Apps."},
		{title: "Impulsum Apps", description: "Aplicaciones internas con Power Apps, Dataverse y Power Pages."},
		{title: "Impulsum Academy", description: "Entrenamiento y change management para una cultura future-ready."},
	],
	solutionsIntro: "Ejemplos recientes y cómo pasamos de idea a resultados reales.",
	solutions: [
		{
			title: "Power BI + Redshift",
			description: "Tablero operativo para Gerdau con integración Redshift → decisiones en tiempo real.",
			image: "/solutions/sol-1.svg",
			alt: "Dashboard Power BI para Gerdau",
		},
		{
			title: "Power App de contratos",
			description: "Gestión de contratos y aprobaciones para Coca Cola.",
			image: "/solutions/sol-2.svg",
			alt: "Power App de contratos",
		},
		{
			title: "Copilot Enterprise Pilot",
			description: "Piloto de Copilot for Microsoft 365 para Vierci con gobierno y adopción.",
			image: "/solutions/sol-3.svg",
			alt: "Piloto Copilot Enterprise",
		},
		{
			title: "Co-delivery",
			description: "Colaboración con OneInfo y Quales para acelerar entregas complejas.",
			image: "/solutions/sol-4.svg",
			alt: "Co-delivery con partners",
		},
	],
	technologiesIntro: "Stack seguro y escalable elegido según el problema:",
	technologies: [
		"Microsoft 365 & Copilot",
		"Power BI",
		"Power Automate",
		"Power Apps",
		"Copilot Studio",
		"Dataverse",
		"SharePoint",
		"Azure",
		"GCP",
		"AWS",
		"Redshift",
		"SQL Server",
	],
	cases: [
		"Reducción de tiempos de ciclo y retrabajo con flujos orquestados.",
		"Dashboards operativos unificados para decidir más rápido.",
		"Academias digitales y adopción efectiva de IA.",
		"Arquitecturas gobernadas para seguridad y cumplimiento.",
	],
	clientsIntro: "Socio para optimizar procesos, reducir costos y liderar la transformación digital.",
	clients: [
		{
			title: "Operaciones",
			description: "Menos retrabajo y SLA cumplidos con flujos orquestados.",
			image: "/clients/client-1.svg",
		},
		{
			title: "Ventas y marketing",
			description: "Lead routing, scoring y alertas comerciales con datos confiables.",
			image: "/clients/client-2.svg",
		},
		{title: "Finanzas", description: "Control, conciliaciones y tableros trazables.", image: "/clients/client-3.svg"},
		{
			title: "Personas",
			description: "Onboarding, soporte interno y academias con IA segura.",
			image: "/clients/client-4.svg",
		},
	],
	method: {
		title: "Framework IMPULSUM",
		steps: "Insight · Model · Pilot · Unify · Launch · Scale · Upskill · Measure",
		description:
			"Descubrimos oportunidades, diseñamos soluciones, probamos impacto y medimos adopción con gobierno desde el inicio.",
	},
	blog: {
		title: "Ideas y recursos",
		description: "Guías prácticas y casos listos para implementar muy pronto.",
		cards: [
			{title: "Cómo priorizar casos de IA", description: "Checklist para elegir quick wins y proyectos estratégicos."},
			{title: "Data playbook para negocio", description: "Pasos para consolidar métricas y gobernar accesos."},
		],
	},
	contact: {
		title: "¿Listo para el próximo salto?",
		description: "Córdoba, Argentina · Trabajo híbrido/remoto · Alcance local, regional e internacional",
		fields: {
			name: "Nombre",
			company: "Empresa",
			email: "Email",
			message: "Mensaje",
		},
		submit: "Enviar",
		whatsapp: "WhatsApp",
		mailSubject: "Solicitud de diagnóstico - Impulsum",
		mailFeedback: "Abriendo tu cliente de correo...",
		whatsappFallback: "Si no se abrió el correo, podés escribirnos por WhatsApp.",
	},
	hashtags:
		"#Impulsum #AIforBusiness #Automation #Microsoft365 #CopilotForWork #PowerBI #PowerAutomate #PowerApps #DataWarehouse #ETL #DigitalTransformation #FutureReady #DataDriven #EnterpriseAI #ProcessOrchestration",
	footer:
		"Impulsum es una firma de consultoría tecnológica que acelera la transformación de negocios mediante datos, IA y automatización. Con base en Córdoba y alcance global, acompañamos a empresas que buscan eficiencia, control y escalabilidad.",
	comingSoon: "Pronto",
};

const baseEn: typeof baseEs = {
	nav: {
		propuesta: "About",
		services: "Services",
		solutions: "Solutions",
		technologies: "Technologies",
		clients: "Clients",
		blog: "Ideas",
		contact: "Contact",
	},
	heroTitle: "We drive smart decisions with data, automation, and AI.",
	heroLead:
		"We modernize daily operations by integrating Microsoft 365, Power Platform, Copilot, data, and automation to reach real efficiency and measurable results.",
	heroCTA: "Impulsum your next digital leap",
	heroSecondary: "See our approach",
	heroBadges: ["Microsoft 365", "Power Platform", "Copilot for Work"],
	valueTitle: "Consulting that delivers measurable outcomes",
	valueBody:
		"We do not sell technology; we deliver efficiency, innovation, and future-ready teams. Pilots in weeks, real adoption, and governance from day one.",
	servicesIntro: "Microsoft-first team from Córdoba with global reach—shipping in weeks, not months.",
	impulsumLetters: [
		{letter: "I", title: "Insight", detail: "We spot opportunities through data and interviews."},
		{letter: "M", title: "Model", detail: "We design architecture, processes, and governance."},
		{letter: "P", title: "Pilot", detail: "We test impact with a high-value use case."},
		{letter: "U", title: "Unify", detail: "We integrate data, systems, and workflows."},
		{letter: "L", title: "Launch", detail: "We ship the solution to production."},
		{letter: "S", title: "Scale", detail: "We expand to more areas with governance."},
		{letter: "U", title: "Upskill", detail: "We train teams and leaders."},
		{letter: "M", title: "Measure", detail: "We track impact and optimize."},
	],
	services: [
		{title: "Impulsum Advisory", description: "Strategy and governance across Microsoft 365 and Copilot."},
		{title: "Impulsum Agents", description: "AI agents and copilots tuned to your real processes."},
		{title: "Impulsum BI", description: "ETL/ELT, Data Warehouse, and analytics with Power BI."},
		{title: "Impulsum Automate", description: "Process orchestration with Power Automate and Logic Apps."},
		{title: "Impulsum Apps", description: "Internal apps on Power Apps, Dataverse, and Power Pages."},
		{title: "Impulsum Academy", description: "Training and change management for a future-ready culture."},
	],
	solutionsIntro: "Recent examples and how we move from idea to real results.",
	solutions: [
		{
			title: "Power BI + Redshift",
			description: "Operational dashboard for Gerdau (Redshift integration) → faster decisions.",
			image: "/solutions/sol-1.svg",
			alt: "Power BI dashboard for Gerdau",
		},
		{
			title: "Contract Power App",
			description: "Contract generation and approvals for Coca Cola.",
			image: "/solutions/sol-2.svg",
			alt: "Contract Power App",
		},
		{
			title: "Copilot Enterprise Pilot",
			description: "Copilot for Microsoft 365 pilot for Vierci with governance and adoption.",
			image: "/solutions/sol-3.svg",
			alt: "Copilot Enterprise Pilot",
		},
		{
			title: "Co-delivery",
			description: "Working with OneInfo and Quales to accelerate complex deliveries.",
			image: "/solutions/sol-4.svg",
			alt: "Co-delivery with partners",
		},
	],
	technologiesIntro: "Secure, scalable stack chosen to fit the problem:",
	technologies: [
		"Microsoft 365 & Copilot",
		"Power BI",
		"Power Automate",
		"Power Apps",
		"Copilot Studio",
		"Dataverse",
		"SharePoint",
		"Azure",
		"GCP",
		"AWS",
		"Redshift",
		"SQL Server",
	],
	cases: [
		"Cycle times and rework reduced with orchestrated flows.",
		"Unified operational dashboards so leaders decide faster.",
		"Digital academies and effective AI adoption.",
		"Governed architectures for security and compliance.",
	],
	clientsIntro: "Partner for process optimization, cost reduction, and digital transformation.",
	clients: [
		{
			title: "Operations",
			description: "Less rework and SLA met through orchestrated flows.",
			image: "/clients/client-1.svg",
		},
		{
			title: "Sales & marketing",
			description: "Lead routing, scoring, and alerts powered by reliable data.",
			image: "/clients/client-2.svg",
		},
		{
			title: "Finance",
			description: "Control, reconciliations, and dashboards with traceability.",
			image: "/clients/client-3.svg",
		},
		{
			title: "People",
			description: "Onboarding, internal support, and academies with secure AI.",
			image: "/clients/client-4.svg",
		},
	],
	method: {
		title: "IMPULSUM Framework",
		steps: "Insight · Model · Pilot · Unify · Launch · Scale · Upskill · Measure",
		description:
			"We spot opportunities, design solutions, test impact, and measure adoption with governance from day one.",
	},
	blog: {
		title: "Ideas & resources",
		description: "Actionable guides and ready-to-run use cases coming soon.",
		cards: [
			{title: "How to prioritize AI use cases", description: "Checklist to pick quick wins and strategic bets."},
			{title: "Data playbook for business teams", description: "Steps to consolidate metrics and govern access."},
		],
	},
	contact: {
		title: "Ready for your next leap?",
		description: "Córdoba, Argentina · Hybrid/remote work · Local, regional, and global reach",
		fields: {
			name: "Name",
			company: "Company",
			email: "Email",
			message: "Message",
		},
		submit: "Send",
		whatsapp: "WhatsApp",
		mailSubject: "Diagnosis request - Impulsum",
		mailFeedback: "Opening your mail client...",
		whatsappFallback: "If email did not open, send us a WhatsApp.",
	},
	hashtags:
		"#Impulsum #AIforBusiness #Automation #Microsoft365 #CopilotForWork #PowerBI #PowerAutomate #PowerApps #DataWarehouse #ETL #DigitalTransformation #FutureReady #DataDriven #EnterpriseAI #ProcessOrchestration",
	footer:
		"Impulsum accelerates business transformation with data, AI, and automation. Based in Córdoba with global reach, we support companies seeking efficiency, control, and scale.",
	comingSoon: "Soon",
};

export type Copy = typeof baseEs;

export const copy: Record<Language, Copy> = {
	es: baseEs,
	en: baseEn,
};
