import {
	IconBrandFacebook,
	IconBrandFacebookFilled,
	IconBrandLinkedin,
	IconBrandLinkedinFilled,
	IconBrandWhatsapp,
	IconBrandX,
	IconBrandXFilled,
} from "@tabler/icons-react";
import type {Language, SectionId} from "./types";

export const navOrder: SectionId[] = [
	"services",
	"experiences",
	"framework",
	"us",
	// "contact",
];

export const socialLinks = [
	{
		href: "https://twitter.com/impulsum-latam/",
		label: "X (Twitter)",
		src: "/contact/x.svg",
	},

	{href: "https://facebook.com/impulsum-latam/", label: "Facebook", src: "/contact/fb.svg"},
	{
		href: "https://www.linkedin.com/company/impulsum-latam/",
		label: "LinkedIn",
		src: "/contact/linkedin.svg",
	},
] as const;

export const heroStats = [
	{label: "Time-to-pilot", value: "4-6 semanas"},
	{label: "Adopción", value: "+70% equipos"},
	{label: "Cobertura", value: "Ops · Ventas · Finanzas"},
];

export const technologyLogos = [
	{name: "Microsoft 365", short: "M365", logo: "/hero/logos/microsoft-365.svg"},
	{name: "Copilot", short: "CPLT", logo: "/hero/logos/microsoft-copilot.svg"},
	{name: "Power BI", short: "PBI", logo: "/hero/logos/power-bi.svg"},
	{name: "Power Automate", short: "PA", logo: "/hero/logos/power-automate.svg"},
	{name: "Power Apps", short: "PApps", logo: "/hero/logos/power-apps.svg"},
	{name: "Copilot Studio", short: "C.Studio", logo: "/hero/logos/copilot-studio.svg"},
	{name: "Dataverse", short: "DV", logo: "/hero/logos/dataverse.png"},
	{name: "SharePoint", short: "SP", logo: "/hero/logos/sharepoint.svg"},
	{name: "Azure", short: "AZ", logo: "/hero/logos/azure.svg"},
	{name: "GCP", short: "GCP", logo: "/hero/logos/gcp.svg"},
	{name: "AWS", short: "AWS", logo: "/hero/logos/aws.svg"},
	{name: "Redshift", short: "RS", logo: "/hero/logos/redshift.svg"},
	{name: "SQL Server", short: "SQL", logo: "/hero/logos/sql-server.svg"},
];

const baseEs = {
	nav: {
		hero: "Hero",
		services: "Servicios",
		experiences: "Experiencias",
		// technologies: "Tecnologías",
		framework: "Framework",
		us: "Nosotros",
		contact: "Contacto",
	},
	heroTitle: "Orquestamos tecnología para que tu negocio avance.",
	heroLead: "Datos, automatización e IA aplicados con gobierno y foco en resultados.",
	heroCTA: "Haz tu próximo salto digital",
	heroSecondary: "Conoce nuestro enfoque",
	services: [
		{title: "Impulsum Advisory", description: "Estrategia y gobierno en Microsoft 365 y Copilot."},
		{title: "Impulsum Agents", description: "Agentes de IA y copilotos adaptados a tus procesos reales."},
		{title: "Impulsum BI", description: "ETL/ELT, Data Warehouse y analítica con Power BI."},
		{title: "Impulsum Automate", description: "Orquestación de procesos con Power Automate y Logic Apps."},
		{title: "Impulsum Apps", description: "Aplicaciones internas con Power Apps, Dataverse y Power Pages."},
		{title: "Impulsum Academy", description: "Entrenamiento y change management para una cultura future-ready."},
	],
	experiencesButton: "Conocer más",
	experiences: [
		{
			title: "Power BI + Redshift",
			description: "Tablero operativo para Gerdau con integración Redshift → decisiones en tiempo real.",
			image: "/experiences/gerdau.svg",
			alt: "Dashboard Power BI para Gerdau",
		},
		{
			title: "Power App de contratos",
			description: "Gestión de contratos y aprobaciones para Coca Cola.",
			image: "/experiences/coca.svg",
			alt: "Power App de contratos",
		},
		{
			title: "Copilot Enterprise Pilot",
			description: "Piloto de Copilot for Microsoft 365 para Vierci con gobierno y adopción.",
			image: "/experiences/vierci.svg",
			alt: "Piloto Copilot Enterprise",
		},
		{
			title: "Co-delivery",
			description: "Colaboración con OneInfo y Quales para acelerar entregas complejas.",
			image: "/experiences/quales.svg",
			alt: "Co-delivery con partners",
		},
	],
	framework: {
		title: "Impulsum Framework",
		subtitle: "De datos a impacto, paso a paso",
		description:
			"Un método probado para diseñar, validar y escalar soluciones de datos, automatización e IA, con foco en resultados reales y medibles.",
		parts: [
			{
				title: "Insight + Model",
				subtitle: "Entendemos dónde estás y dónde generar impacto",
				description: "Diagnosticamos procesos, datos y madurez tecnológica para detectar oportunidades de alto valor.",
			},
			{
				title: "Pilot + Unify",
				subtitle: "Desarrollamos un piloto y lo validamos",
				description:
					"Definimos arquitectura de datos, automatizaciones y/o agentes inteligentes. Validamos pilotos de alto retorno.",
			},
			{
				title: "Launch + Scale",
				subtitle: "Desplegamos en producción y expandimos el impacto.",
				description: "Desplegamos la solución en producción alineado con buenas prácticas de gobernanza y escala.",
			},
			{
				title: "Upskill + Measure",
				subtitle: "Escalamos y mejoramos continuamente",
				description: "Extendemos la solución, capacitamos equipos y medimos impacto para evolucionar sin fricción.",
			},
		],
		question: "¿Qué garantiza el ",
		answer: [
			{
				logo: "/framework/logo1.svg",
				description: "Resultados medibles desde el inicio",
			},
			{
				logo: "/framework/logo2.svg",
				description: "Soluciones seguras, escalables y gobernadas",
			},
			{
				logo: "/framework/logo3.svg",
				description: "Integración con tu ecosistema actual",
			},
			{
				logo: "/framework/logo4.svg",
				description: "Adopción real por parte de los equipos",
			},
			{
				logo: "/framework/logo5.svg",
				description: "Mejora continua basada en datos",
			},
		],
	},
	// technologiesIntro: "Stack seguro y escalable elegido según el problema:",
	// technologies: [
	// 	"Microsoft 365 & Copilot",
	// 	"Power BI",
	// 	"Power Automate",
	// 	"Power Apps",
	// 	"Copilot Studio",
	// 	"Dataverse",
	// 	"SharePoint",
	// 	"Azure",
	// 	"GCP",
	// 	"AWS",
	// 	"Redshift",
	// 	"SQL Server",
	// ],
	// cases: [
	// 	"Reducción de tiempos de ciclo y retrabajo con flujos orquestados.",
	// 	"Dashboards operativos unificados para decidir más rápido.",
	// 	"Academias digitales y adopción efectiva de IA.",
	// 	"Arquitecturas gobernadas para seguridad y cumplimiento.",
	// ],
	// clientsIntro: "Socio para optimizar procesos, reducir costos y liderar la transformación digital.",
	// clients: [
	// 	{
	// 		title: "Operaciones",
	// 		description: "Menos retrabajo y SLA cumplidos con flujos orquestados.",
	// 		image: "/clients/client-1.svg",
	// 	},
	// 	{
	// 		title: "Ventas y marketing",
	// 		description: "Lead routing, scoring y alertas comerciales con datos confiables.",
	// 		image: "/clients/client-2.svg",
	// 	},
	// 	{title: "Finanzas", description: "Control, conciliaciones y tableros trazables.", image: "/clients/client-3.svg"},
	// 	{
	// 		title: "Personas",
	// 		description: "Onboarding, soporte interno y academias con IA segura.",
	// 		image: "/clients/client-4.svg",
	// 	},
	// ],
	us: {
		title: "Orquestamos tecnología para que tu negocio avance.",
		description:
			"Transformamos datos y tecnología en resultados concretos. Acompañamos a las organizaciones en la integración de datos, automatización y agentes de  inteligencia artificial dentro de sistemas simples, gobernados y alineados al negocio. Diseñamos e implementamos soluciones que elevan la productividad y aceleran la toma de decisiones, apoyándonos en las plataformas tecnológicas más confiables del mercado, especializados en el universo Microsoft.",
	},
	contact: {
		title: "¿Listo para el próximo salto?",
		description: "Córdoba, Argentina · Trabajo híbrido/remoto · Alcance local, regional e internacional",
		fields: {
			name: "Coloca tu nombre",
			company: "Tu empresa",
			email: "Coloca tu email",
			tel: "Coloca tu teléfono",
			message: "Coloca tu mensaje",
		},
		placeholder: {
			name: "John Doe",
			company: "Impulsum",
			email: "johndoe@impulsum.com",
			tel: "+54 11 123 1234",
			message: "Quiero conocer más sobre ustedes...",
		},
		submit: "Enviar",
		whatsapp: "WhatsApp",
		mailSubject: "Solicitud de diagnóstico - Impulsum",
		mailFeedback: "Abriendo tu cliente de correo...",
		getUs: "contacto@impulsum.com.ar · +54 9 357 266-7519",
		// whatsappFallback: "Si no se abrió el correo, podés escribirnos por WhatsApp.",
	},
	hashtags:
		"#Impulsum #AIforBusiness #Automation #Microsoft365 #CopilotForWork #PowerBI #PowerAutomate #PowerApps #DataWarehouse #ETL #DigitalTransformation #FutureReady #DataDriven #EnterpriseAI #ProcessOrchestration",
	footer:
		"Impulsum es una firma de consultoría tecnológica que acelera la transformación de negocios mediante datos, IA y automatización. Con base en Córdoba y alcance global, acompañamos a empresas que buscan eficiencia, control y escalabilidad.",
};

const baseEn: typeof baseEs = {
	nav: {
		hero: "Hero",
		us: "Us",
		framework: "Framework",
		experiences: "Experiences",
		services: "Services",
		// technologies: "Technologies",
		contact: "Contact",
	},
	heroTitle: "We drive smart decisions with data, automation, and AI.",
	heroLead:
		"We modernize daily operations by integrating Microsoft 365, Power Platform, Copilot, data, and automation to reach real efficiency and measurable results.",
	heroCTA: "Impulsum your next digital leap",
	heroSecondary: "See our approach",
	// servicesIntro: "Microsoft-first team from Córdoba with global reach—shipping in weeks, not months.",
	services: [
		{title: "Impulsum Advisory", description: "Strategy and governance across Microsoft 365 and Copilot."},
		{title: "Impulsum Agents", description: "AI agents and copilots tuned to your real processes."},
		{title: "Impulsum BI", description: "ETL/ELT, Data Warehouse, and analytics with Power BI."},
		{title: "Impulsum Automate", description: "Process orchestration with Power Automate and Logic Apps."},
		{title: "Impulsum Apps", description: "Internal apps on Power Apps, Dataverse, and Power Pages."},
		{title: "Impulsum Academy", description: "Training and change management for a future-ready culture."},
	],
	experiencesButton: "Tell me more",
	experiences: [
		{
			title: "Power BI + Redshift",
			description: "Operational dashboard for Gerdau (Redshift integration) → faster decisions.",
			image: "/experiences/gerdau.svg",
			alt: "Power BI dashboard for Gerdau",
		},
		{
			title: "Contract Power App",
			description: "Contract generation and approvals for Coca Cola.",
			image: "/experiences/coca.svg",
			alt: "Contract Power App",
		},
		{
			title: "Copilot Enterprise Pilot",
			description: "Copilot for Microsoft 365 pilot for Vierci with governance and adoption.",
			image: "/experiences/vierci.svg",
			alt: "Copilot Enterprise Pilot",
		},
		{
			title: "Co-delivery",
			description: "Working with OneInfo and Quales to accelerate complex deliveries.",
			image: "/experiences/quales.svg",
			alt: "Co-delivery with partners",
		},
	],
	framework: {
		title: "Impulsum Framework",
		subtitle: "De datos a impacto, paso a paso",
		description:
			"Un método probado para diseñar, validar y escalar soluciones de datos, automatización e IA, con foco en resultados reales y medibles.",
		parts: [
			{
				title: "Insight + Model",
				subtitle: "Entendemos dónde estás y dónde generar impacto",
				description: "Diagnosticamos procesos, datos y madurez tecnológica para detectar oportunidades de alto valor.",
			},
			{
				title: "Pilot + Unify",
				subtitle: "Desarrollamos un piloto y lo validamos",
				description:
					"Definimos arquitectura de datos, automatizaciones y/o agentes inteligentes. Validamos pilotos de alto retorno.",
			},
			{
				title: "Launch + Scale",
				subtitle: "Desplegamos en producción y expandimos el impacto.",
				description: "Desplegamos la solución en producción alineado con buenas prácticas de gobernanza y escala.",
			},
			{
				title: "Upskill + Measure",
				subtitle: "Escalamos y mejoramos continuamente",
				description: "Extendemos la solución, capacitamos equipos y medimos impacto para evolucionar sin fricción.",
			},
		],
		question: "¿Qué garantiza el ",
		answer: [
			{
				logo: "/framework/logo1.svg",
				description: "Resultados medibles desde el inicio",
			},
			{
				logo: "/framework/logo2.svg",
				description: "Soluciones seguras, escalables y gobernadas",
			},
			{
				logo: "/framework/logo3.svg",
				description: "Integración con tu ecosistema actual",
			},
			{
				logo: "/framework/logo4.svg",
				description: "Adopción real por parte de los equipos",
			},
			{
				logo: "/framework/logo5.svg",
				description: "Mejora continua basada en datos",
			},
		],
	},
	// technologiesIntro: "Secure, scalable stack chosen to fit the problem:",
	// technologies: [
	// 	"Microsoft 365 & Copilot",
	// 	"Power BI",
	// 	"Power Automate",
	// 	"Power Apps",
	// 	"Copilot Studio",
	// 	"Dataverse",
	// 	"SharePoint",
	// 	"Azure",
	// 	"GCP",
	// 	"AWS",
	// 	"Redshift",
	// 	"SQL Server",
	// ],
	// cases: [
	// 	"Cycle times and rework reduced with orchestrated flows.",
	// 	"Unified operational dashboards so leaders decide faster.",
	// 	"Digital academies and effective AI adoption.",
	// 	"Governed architectures for security and compliance.",
	// ],
	// clientsIntro: "Partner for process optimization, cost reduction, and digital transformation.",
	// clients: [
	// 	{
	// 		title: "Operations",
	// 		description: "Less rework and SLA met through orchestrated flows.",
	// 		image: "/clients/client-1.svg",
	// 	},
	// 	{
	// 		title: "Sales & marketing",
	// 		description: "Lead routing, scoring, and alerts powered by reliable data.",
	// 		image: "/clients/client-2.svg",
	// 	},
	// 	{
	// 		title: "Finance",
	// 		description: "Control, reconciliations, and dashboards with traceability.",
	// 		image: "/clients/client-3.svg",
	// 	},
	// 	{
	// 		title: "People",
	// 		description: "Onboarding, internal support, and academies with secure AI.",
	// 		image: "/clients/client-4.svg",
	// 	},
	// ],
	us: {
		title: "Orquestamos tecnología para que tu negocio avance.",
		description:
			"Transformamos datos y tecnología en resultados concretos. Acompañamos a las organizaciones en la integración de datos, automatización y agentes de  inteligencia artificial dentro de sistemas simples, gobernados y alineados al negocio. Diseñamos e implementamos soluciones que elevan la productividad y aceleran la toma de decisiones, apoyándonos en las plataformas tecnológicas más confiables del mercado, especializados en el universo Microsoft.",
	},
	contact: {
		title: "Ready for your next leap?",
		description: "Córdoba, Argentina · Hybrid/remote work · Local, regional, and global reach",
		fields: {
			name: "Your name",
			company: "Your company",
			email: "Your email",
			tel: "Your phone number",
			message: " Your message",
		},
		placeholder: {
			name: "John Doe",
			company: "Impulsum",
			email: "johndoe@impulsum.com",
			tel: "(555) 555-1234",
			message: "I want to learn more about you...",
		},
		submit: "Send",
		whatsapp: "WhatsApp",
		mailSubject: "Diagnosis request - Impulsum",
		mailFeedback: "Opening your mail client...",
		getUs: "contacto@impulsum.com.ar · +54 9 357 266-7519",
		// whatsappFallback: "If email did not open, send us a WhatsApp.",
	},
	hashtags:
		"#Impulsum #AIforBusiness #Automation #Microsoft365 #CopilotForWork #PowerBI #PowerAutomate #PowerApps #DataWarehouse #ETL #DigitalTransformation #FutureReady #DataDriven #EnterpriseAI #ProcessOrchestration",
	footer:
		"Impulsum accelerates business transformation with data, AI, and automation. Based in Córdoba with global reach, we support companies seeking efficiency, control, and scale.",
};

export type Copy = typeof baseEs;

export const copy: Record<Language, Copy> = {
	es: baseEs,
	en: baseEn,
};
