"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";
import {NavBar} from "./components/NavBar";
import {
	// BlogSection,
	ClientsSection,
	ContactSection,
	FooterSection,
	HeroSection,
	ServicesSection,
	SolutionsSection,
	TechnologiesSection,
	ValueSection,
} from "./components/Sections";
import {copy, navOrder} from "./copy";
import type {Language, SectionId} from "./types";

export default function HomePage() {
	const [lang, setLang] = useState<Language>("es");
	const [feedback, setFeedback] = useState("");
	const [activeNav, setActiveNav] = useState<SectionId>("propuesta");
	const contactFormRef = useRef<HTMLFormElement>(null);
	const isMobile = useMediaQuery("(max-width: 900px)");
	const text = useMemo(() => copy[lang], [lang]);

	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);

	useEffect(() => {
		const syncHash = () => {
			const rawHash = (window.location.hash.replace("#", "") || "propuesta") as SectionId;
			if (navOrder.includes(rawHash)) setActiveNav(rawHash);
		};
		syncHash();
		window.addEventListener("hashchange", syncHash);
		return () => window.removeEventListener("hashchange", syncHash);
	}, []);

	useEffect(() => {
		const elements = Array.from(document.querySelectorAll(".reveal"));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add("visible");
				});
			},
			{threshold: 0.25}
		);
		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const scrollTo = (targetId: SectionId) => {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({behavior: "smooth", block: "start"});
			history.replaceState(null, "", `#${targetId}`);
		}
		setActiveNav(targetId);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Mailto flow disabled (depends on user client). Encourage WhatsApp instead.
		// setFeedback(text.contact.whatsappFallback);
	};

	const handleWhatsapp = () => {
		const formData = new FormData(contactFormRef.current ?? undefined);
		const name = (formData.get("name") as string) || "";
		const company = (formData.get("company") as string) || "";
		const message = (formData.get("message") as string) || "";
		const intro = lang === "es" ? "Hola, soy" : "Hi, this is";
		const textMessage = `${intro} ${name}${company ? ` de ${company}` : ""}. ${message}`;
		const whatsappUrl = `https://wa.me/5493572667519?text=${encodeURIComponent(textMessage)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<div className="page-shell">
			<div className="grain" />
			<NavBar
				lang={lang}
				setLang={setLang}
				activeNav={activeNav}
				onNavClick={(section) => scrollTo(section)}
				navLabels={text.nav}
				isMobile={Boolean(isMobile)}
			/>

			<main>
				<HeroSection text={text} onPrimary={() => scrollTo("contact")} onSecondary={() => scrollTo("propuesta")} />
				<ValueSection text={text} />
				<ServicesSection text={text} />
				<SolutionsSection text={text} />
				<TechnologiesSection text={text} />
				<ClientsSection text={text} />
				{/* <BlogSection text={text} /> */}
				<ContactSection
					text={text}
					onSubmit={handleSubmit}
					onWhatsapp={handleWhatsapp}
					feedback={feedback}
					formRef={contactFormRef}
				/>
			</main>

			<FooterSection text={text} />
		</div>
	);
}
