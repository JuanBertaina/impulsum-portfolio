"use client";

import Image from "next/image";
import {ActionIcon, Button, Container, Group, Stack} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {IconMenu2, IconX} from "@tabler/icons-react";
import {navOrder} from "../copy";
import type {Language, SectionId} from "../types";

type Props = {
	lang: Language;
	setLang: (lang: Language) => void;
	activeNav: SectionId;
	onNavClick: (section: SectionId) => void;
	navLabels: Record<SectionId, string>;
	isMobile: boolean;
};

export function NavBar({lang, setLang, activeNav, onNavClick, navLabels, isMobile}: Props) {
	const [opened, {toggle, close}] = useDisclosure(false);

	const handleNav = (id: SectionId) => {
		onNavClick(id);
		close();
	};

	return (
		<header className="glass-header">
			<Container size="xl" className="nav-container">
				<Image
					src="/navbar/logopag1.svg"
					alt="Impulsum logo"
					onClick={() => handleNav("hero")}
					width={168}
					height={43}
					style={{cursor: "pointer", userSelect: "none", height: "auto"}}
					priority
				/>
				<Group gap="xs" className="desktop-nav">
					{navOrder.map((id) => (
						<Button
							key={id}
							variant={"subtle"}
							style={
								activeNav === id
									? {
											borderBottom: "2px solid ",
											fontWeight: 900,
											borderRadius: 0,
											color: "rgba(245, 247, 250, 1)",
										}
									: {
											borderBottom: "0px solid",
											fontWeight: 500,
											borderRadius: 0,
											color: "rgba(245, 247, 250, 1)",
										}
							}
							size="sm"
							className="nav-link"
							onClick={() => handleNav(id)}
						>
							{navLabels[id]}
						</Button>
					))}
				</Group>

				<Group gap="xs" align="center" wrap="wrap" className="nav-actions">
					<Button
						variant="white"
						color="rgba(42, 46, 52, 1)"
						size={isMobile ? "xs" : "sm"}
						onClick={() => handleNav("contact")}
						className="contact-btn"
					>
						{navLabels.contact}
					</Button>
					<div className={`language-switch language-switch--${lang}`} aria-label={lang === "es" ? "Cambiar idioma" : "Change language"}>
						<button
							type="button"
							className={`language-switch__option ${lang === "es" ? "is-active" : ""}`}
							onClick={() => setLang("es")}
							aria-pressed={lang === "es"}
						>
							<Image src="/navbar/flags/ar-d.svg" alt="Español" height={20} width={28} loading="lazy" />
						</button>
						<button
							type="button"
							className={`language-switch__option ${lang === "en" ? "is-active" : ""}`}
							onClick={() => setLang("en")}
							aria-pressed={lang === "en"}
						>
							<Image src="/navbar/flags/us-d.svg" alt="English" height={20} width={28} loading="lazy" />
						</button>
					</div>
					<ActionIcon
						variant="outline"
						size={isMobile ? "md" : "lg"}
						className="mobile-only"
						aria-label={lang === "es" ? "Menú" : "Menu"}
						onClick={toggle}
					>
						{opened ? <IconX size={20} /> : <IconMenu2 size={20} />}
					</ActionIcon>
				</Group>
			</Container>

			{opened ? (
				<nav className="mobile-nav-panel mobile-only" aria-label={lang === "es" ? "Navegación" : "Navigation"}>
					<Stack gap="sm" className="mobile-nav-panel__links">
						{navOrder.map((id) => (
							<Button key={id} variant={activeNav === id ? "filled" : "light"} onClick={() => handleNav(id)}>
								{navLabels[id]}
							</Button>
						))}
					</Stack>
				</nav>
			) : null}
		</header>
	);
}
