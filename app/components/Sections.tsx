"use client";

import Image from "next/image";
import {
	ActionIcon,
	Avatar,
	Badge,
	Button,
	Card,
	Container,
	Image as MantineImage,
	Grid,
	Group,
	Paper,
	SimpleGrid,
	Stack,
	Text,
	Textarea,
	TextInput,
	ThemeIcon,
	Title,
	Flex,
} from "@mantine/core";
import {IconArrowRight, IconBrandWhatsapp, IconChevronLeft, IconChevronRight, IconSend} from "@tabler/icons-react";
import {socialLinks, technologyLogos, type Copy} from "../copy";

export type SectionProps = {text: Copy};

export function SolutionsSection({text}: SectionProps) {
	return (
		<Container size="lg" id="solutions" className="section-shell reveal">
			<Group justify="space-between" align="flex-end" mb="md" wrap="wrap">
				<div>
					<Title order={2}>{text.nav.services}</Title>
					<Text c="dimmed">{text.servicesIntro}</Text>
				</div>
				<Badge variant="gradient">Impacto medible</Badge>
			</Group>
			<SimpleGrid cols={{base: 1, lg: 2}} spacing={{base: "sm", sm: "md"}}>
				{text.solutions.map((solution) => (
					<Card key={solution.title} padding="lg" radius="md" withBorder>
						{solution.image ? (
							<MantineImage
								src={solution.image}
								alt={solution.alt || solution.title}
								radius="md"
								height={160}
								fit="cover"
								className="solution-image"
								mb="sm"
							/>
						) : null}
						<Group justify="space-between" mb="xs">
							<Text fw={700}>{solution.title}</Text>
							<ThemeIcon variant="light" color="teal" radius="md">
								<IconArrowRight size={16} />
							</ThemeIcon>
						</Group>
						<Text c="dimmed" size="sm">
							{solution.description}
						</Text>
					</Card>
				))}
			</SimpleGrid>
		</Container>
	);
}
export function ClientsSection({text}: SectionProps) {
	return (
		<Container size="xl" id="clients" className="section-shell reveal">
			<Group justify="space-between" align="flex-end" mb="md" wrap="wrap">
				<div>
					<Title order={2}>{text.nav.clients}</Title>
					<Text c="dimmed">{text.clientsIntro}</Text>
				</div>
				<Badge variant="outline" color="blue">
					Operaciones · Ventas · Finanzas · HR
				</Badge>
			</Group>
			<SimpleGrid cols={{base: 1, sm: 2, md: 3, lg: 4}} spacing={{base: "sm", sm: "md"}}>
				{text.clients.map((client) => (
					<Card key={client.title} padding="lg" radius="md" withBorder className="glass-card">
						{client.image ? (
							<MantineImage
								src={client.image}
								alt={client.title}
								radius="md"
								height={120}
								fit="contain"
								className="client-image"
								mb="sm"
							/>
						) : null}
						<Text fw={700}>{client.title}</Text>
						<Text c="dimmed" size="sm">
							{client.description}
						</Text>
					</Card>
				))}
			</SimpleGrid>
		</Container>
	);
}

// export function BlogSection({text}: SectionProps) {
// 	return (
// 		<Container size="xl" id="blog" className="section-shell reveal">
// 			<Group justify="space-between" mb="md" wrap="wrap">
// 				<div>
// 					<Title order={2}>{text.blog.title}</Title>
// 					<Text c="dimmed">{text.blog.description}</Text>
// 				</div>
// 			</Group>
// 			<SimpleGrid cols={{base: 1, md: 2}} spacing={{base: "sm", sm: "md"}}>
// 				{text.blog.cards.map((card) => (
// 					<Card key={card.title} padding="lg" radius="md" withBorder>
// 						<Group justify="space-between" mb="xs">
// 							<Text fw={700}>{card.title}</Text>
// 							<Badge variant="outline" color="gray">
// 								{text.comingSoon}
// 							</Badge>
// 						</Group>
// 						<Text c="dimmed" size="sm">
// 							{card.description}
// 						</Text>
// 					</Card>
// 				))}
// 			</SimpleGrid>
// 		</Container>
// 	);
// }
