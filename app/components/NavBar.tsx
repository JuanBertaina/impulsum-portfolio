"use client";

import Image from "next/image";
import {ActionIcon, Button, Container, Drawer, Flex, Group, SegmentedControl, Stack, Text} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {IconMail, IconMenu2, IconX} from "@tabler/icons-react";
import {navOrder, socialLinks} from "../copy";
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
				<Group gap="sm" align="center">
					<Image src="/icon.png" alt="Impulsum logo" width={40} height={40} className="brand-logo" />
					<div>
						<Text fw={800}>Impulsum</Text>
						<Text size="sm" c="dimmed" hidden={isMobile}>
							Data · IA · Automatización
						</Text>
					</div>
				</Group>

				<Group gap="xs" className="desktop-nav">
					{navOrder.map((id) => (
						<Button
							key={id}
							variant={activeNav === id ? "gradient" : "subtle"}
							color="indigo"
							size="sm"
							className="nav-link"
							onClick={() => handleNav(id)}>
							{navLabels[id]}
						</Button>
					))}
				</Group>

				<Group gap="xs" align="center" wrap="wrap" className="nav-actions">
					<SegmentedControl
						value={lang}
						onChange={(value) => setLang(value as Language)}
						data={[
							{
								label: !isMobile ? (
									<Flex p={0}>
										<Image src={"/flags/ar.svg"} alt="espanol" height={20} width={20} />
									</Flex>
								) : (
									<Image src={"/flags/ar.svg"} alt="espanol" height={20} width={20} />
								),
								value: "es",
							},
							{
								label: !isMobile ? (
									<Flex p={0}>
										<Image src={"/flags/united-states-flag-icon.png"} alt="english" height={20} width={20} />
									</Flex>
								) : (
									<Image src={"/flags/united-states-flag-icon.png"} alt="english" height={20} width={20} />
								),
								value: "en",
							},
						]}
						size={isMobile ? "xs" : "sm"}
						radius="md"
						className="language-toggle"
					/>
					<Button
						variant="light"
						size={isMobile ? "xs" : "sm"}
						rightSection={<IconMail size={16} />}
						onClick={() => handleNav("contact")}
						className="contact-btn">
						{navLabels.contact}
					</Button>
					<ActionIcon
						variant="outline"
						size={isMobile ? "md" : "lg"}
						className="mobile-only"
						aria-label="Menú"
						onClick={toggle}>
						{opened ? <IconX size={20} /> : <IconMenu2 size={20} />}
					</ActionIcon>
				</Group>
			</Container>

			<Drawer
				opened={opened && Boolean(isMobile)}
				onClose={close}
				padding="md"
				size="100%"
				title="Navegación"
				className="mobile-only">
				<Stack gap="sm">
					{navOrder.map((id) => (
						<Button key={id} variant={activeNav === id ? "filled" : "light"} onClick={() => handleNav(id)}>
							{navLabels[id]}
						</Button>
					))}
					<Group>
						{socialLinks.map(({href, label, icon: Icon}) => (
							<ActionIcon
								key={href}
								size="lg"
								variant="light"
								component="a"
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}>
								<Icon size={18} />
							</ActionIcon>
						))}
					</Group>
				</Stack>
			</Drawer>
		</header>
	);
}
