"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";
import {NavBar} from "./components/NavBar";
import {copy, navOrder} from "./copy";
import type {Language, SectionId} from "./types";
import {HeroSection} from "./components/sections/HeroSection";
import {ServicesSection} from "./components/sections/ServicesSection";
import {ContactSection} from "./components/sections/ContactSection";
import {FooterSection} from "./components/sections/FooterSection";
import {ExperiencesSection} from "./components/sections/ExperiencesSection";
import {FrameworkSection} from "./components/sections/FrameworkSection";
import {UsSection} from "./components/sections/UsSection";

export default function HomePage() {
	const [lang, setLang] = useState<Language>("es");
	const [feedback] = useState("");
	const [activeNav, setActiveNav] = useState<SectionId>("services");
	const contactFormRef = useRef<HTMLFormElement>(null);
	const navScrollLockRef = useRef<number | null>(null);
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
		let rafId: number | null = null;

		const syncActiveSection = () => {
			rafId = null;
			if (navScrollLockRef.current !== null) return;
			const headerHeight = document.querySelector(".glass-header")?.getBoundingClientRect().height ?? 0;
			const probeY = headerHeight + 32;
			const current = navOrder.find((sectionId) => {
				const section = document.getElementById(sectionId);
				if (!section) return false;
				const rect = section.getBoundingClientRect();
				return rect.top <= probeY && rect.bottom > probeY;
			});

			if (current) setActiveNav(current);
		};

		const scheduleSync = () => {
			if (rafId !== null) return;
			rafId = window.requestAnimationFrame(syncActiveSection);
		};

		syncActiveSection();
		window.addEventListener("scroll", scheduleSync, {passive: true});
		window.addEventListener("resize", scheduleSync);

		return () => {
			window.removeEventListener("scroll", scheduleSync);
			window.removeEventListener("resize", scheduleSync);
			if (rafId !== null) window.cancelAnimationFrame(rafId);
		};
	}, []);

	useEffect(() => {
		const elements = Array.from(document.querySelectorAll(".reveal"));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add("visible");
				});
			},
			{threshold: 0.25},
		);
		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const scrollTo = (targetId: SectionId) => {
		const target = document.getElementById(targetId);
		if (target) {
			if (navScrollLockRef.current !== null) window.clearTimeout(navScrollLockRef.current);
			navScrollLockRef.current = window.setTimeout(() => {
				navScrollLockRef.current = null;
			}, 900);
			const headerHeight = document.querySelector(".glass-header")?.getBoundingClientRect().height ?? 0;
			const targetTop = target.offsetTop - headerHeight;
			window.scrollTo({top: Math.max(0, targetTop), behavior: "smooth"});
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
				<HeroSection text={text} onPrimary={() => scrollTo("hero")} onSecondary={() => scrollTo("experiences")} />
				<ServicesSection text={text} />
				<ExperiencesSection text={text} lang={lang} />
				<FrameworkSection text={text} />
				<UsSection text={text} />
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
