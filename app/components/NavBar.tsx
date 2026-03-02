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
				<Image src="/logopag1.svg" alt="Impulsum logo" width={168} height={43} />
				<Group gap="xs" className="desktop-nav">
					{navOrder.map((id) => (
						<Button
							key={id}
							variant={"subtle"}
							style={
								activeNav === id
									? {borderBottom: "2px solid ", fontWeight: 900, borderRadius: 0, color: "rgba(245, 247, 250, 1)"}
									: {borderBottom: "0px solid", fontWeight: 500, borderRadius: 0, color: "rgba(245, 247, 250, 1)"}
							}
							size="sm"
							className="nav-link"
							onClick={() => handleNav(id)}>
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
						className="contact-btn">
						{navLabels.contact}
					</Button>
					<Flex
						h={27}
						w={83}
						bg={"white"}
						align="stretch"
						p={0}
						m={0}
						justify="space-between"
						style={{
							borderRadius: "4px",
						}}>
						<Image
							onClick={() => setLang("es")}
							src={"/flags/ar-d.svg"}
							alt="espanol"
							height={27}
							width={36}
							style={lang === "en" ? {opacity: "25%"} : {opacity: "100%"}}
						/>
						<Image
							onClick={() => setLang("en")}
							src={"/flags/us-d.svg"}
							alt="english"
							height={27}
							width={36}
							style={lang === "es" ? {opacity: "25%"} : {opacity: "100%"}}
						/>
					</Flex>
					{/* <SegmentedControl
						value={lang}
						data={[
							{
								label: !isMobile ? (
									<Image src={"/flags/ar.svg"} alt="espanol" height={27} width={36} />
								) : (
									<Image src={"/flags/ar.svg"} alt="espanol" height={27} width={36} />
								),
								value: "es",
							},
							{
								label: !isMobile ? (
									<Image src={"/flags/united-states-flag-icon.png"} alt="english" height={27} width={36} />
								) : (
									<Image src={"/flags/united-states-flag-icon.png"} alt="english" height={27} width={36} />
								),
								value: "en",
							},
						]}
						size={isMobile ? "xs" : "sm"}
						radius="md"
						className="language-toggle"
					/> */}

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
