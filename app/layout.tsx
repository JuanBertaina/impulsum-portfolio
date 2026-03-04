import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import {ColorSchemeScript} from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import {Providers} from "./providers";

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Impulsum | Datos, IA y Automatización para tu próximo salto digital",
	description:
		"Consultoría Microsoft 365, Copilot y Power Platform. Modernizá tu operación con datos, automatización e IA: advisory, agentes, BI, apps y formación.",
	keywords: [
		"Impulsum",
		"Consultoría IT",
		"Automatización empresarial",
		"Inteligencia Artificial aplicada",
		"Microsoft 365",
		"Copilot",
		"Power BI",
		"Power Automate",
		"Power Apps",
		"Data Warehouse",
		"ETL",
		"Transformación digital",
		"AI Powered Mindset",
		"Future Ready Culture",
		"Process Orchestration",
	],
	icons: {
		icon: "/Favicon.svg",
		apple: "/Favicon.svg",
	},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
			</head>
			<body className={manrope.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
