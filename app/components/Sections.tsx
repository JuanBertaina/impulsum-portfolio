"use client";

import Image from "next/image";
import {
	ActionIcon,
	Avatar,
	Badge,
	Button,
	Card,
	Container,
	Divider,
	Image as MantineImage,
	Grid,
	Group,
	List,
	Paper,
	SimpleGrid,
	Stack,
	Text,
	Textarea,
	TextInput,
	ThemeIcon,
	Title,
} from "@mantine/core";
import {IconArrowRight, IconBrandWhatsapp, IconCheck, IconSend, IconWorld} from "@tabler/icons-react";
import {useState} from "react";
import {heroStats, socialLinks, technologyLogos, type Copy} from "../copy";

type HeroProps = {
	text: Copy;
	onPrimary: () => void;
	onSecondary: () => void;
};

export function HeroSection({text, onPrimary, onSecondary}: HeroProps) {
	return (
		<Container size="xl" className="hero-shell reveal" id="hero">
			<Grid gutter={{base: "lg", md: "xl"}} align="center">
				<Grid.Col span={{base: 12, md: 7}}>
					<Stack gap="sm">
						<Group gap="xs" wrap="wrap">
							{text.heroBadges.map((badge) => (
								<Badge key={badge} variant="gradient" radius="lg">
									{badge}
								</Badge>
							))}
						</Group>
						<Title order={1}>{text.heroTitle}</Title>
						<Text size="lg" c="dimmed">
							{text.heroLead}
						</Text>
						<Group gap="sm" wrap="wrap">
							<Button size="md" variant="gradient" rightSection={<IconArrowRight size={18} />} onClick={onPrimary}>
								{text.heroCTA}
							</Button>
							<Button size="md" variant="outline" color="gray" onClick={onSecondary}>
								{text.heroSecondary}
							</Button>
						</Group>
						<Group gap="lg" mt="sm" wrap="wrap">
							{heroStats.map((stat) => (
								<Paper key={stat.label} withBorder p="md" radius="md" className="stat-card">
									<Text fw={700}>{stat.value}</Text>
									<Text size="sm" c="dimmed">
										{stat.label}
									</Text>
								</Paper>
							))}
						</Group>
					</Stack>
				</Grid.Col>
				<Grid.Col span={{base: 12, md: 5}}>
					<Paper p="lg" radius="xl" className="glass-card" withBorder>
						<Group justify="space-between" mb="md">
							<Badge variant="light" leftSection={<IconWorld size={14} />}>
								Azure + Power Platform
							</Badge>
							<Badge variant="outline" color="teal">
								Governance-first
							</Badge>
						</Group>
						<Stack gap="sm">
							<Text fw={700}>{text.valueTitle}</Text>
							<Text c="dimmed">{text.valueBody}</Text>
							<Divider my="xs" />
							<List
								spacing="sm"
								icon={
									<ThemeIcon size={20} radius="xl" variant="gradient">
										<IconCheck size={14} />
									</ThemeIcon>
								}>
								<List.Item>Pilotos en semanas con objetivos claros</List.Item>
								<List.Item>Adopción y training integrado</List.Item>
								<List.Item>Seguridad y gobierno desde el inicio</List.Item>
							</List>
						</Stack>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	);
}

type SectionProps = {text: Copy};

export function ValueSection({text}: SectionProps) {
	return (
		<Container size="xl" id="propuesta" className="section-shell reveal">
			<Stack gap="sm">
				<Badge variant="light" color="indigo" size="lg" radius="md">
					{text.servicesIntro}
				</Badge>
				<Title order={2}>{text.valueTitle}</Title>
				<Text c="dimmed" size="lg">
					{text.valueBody}
				</Text>
			</Stack>
		</Container>
	);
}

export function ServicesSection({text}: SectionProps) {
	const [activeLetter, setActiveLetter] = useState(0);
	const steps = text.method.steps
		.split("·")
		.map((s) => s.trim())
		.filter(Boolean);
	return (
		<Container size="xl" id="services" className="section-shell reveal">
			<Group justify="space-between" align="flex-end" mb="md" wrap="wrap">
				<div>
					<Title order={2}>{text.nav.services}</Title>
					<Text c="dimmed">{text.servicesIntro}</Text>
				</div>
				<Badge variant="outline" color="teal">
					Microsoft-first
				</Badge>
			</Group>
			<SimpleGrid cols={{base: 1, sm: 2, lg: 3}} spacing={{base: "sm", sm: "md"}}>
				{text.services.map((service) => (
					<Card key={service.title} padding="lg" radius="md" withBorder className="glass-card">
						<Text fw={700}>{service.title}</Text>
						<Text c="dimmed" size="sm">
							{service.description}
						</Text>
					</Card>
				))}
			</SimpleGrid>
			{/* <Paper withBorder p="md" radius="md" mt="md" className="glass-card">
        <Group justify="space-between" align="flex-start" wrap="wrap">
          <div>
            <Text fw={700}>{text.method.title}</Text>
            <Text c="dimmed" size="sm">
              {text.method.description}
            </Text>
          </div>
          <Badge variant="gradient" color="indigo">
            IMPULSUM
          </Badge>
        </Group>
        <Group gap="xs" mt="sm" wrap="wrap">
          {steps.map((step) => (
            <Badge key={step} variant="light" color="teal">
              {step}
            </Badge>
          ))}
        </Group>
      </Paper> */}
			<Paper withBorder p="md" radius="md" mt="md" className="glass-card">
				<Group justify="space-between" align="flex-start" wrap="wrap">
					<div>
						<Text fw={700}>IMPULSUM Framework</Text>
						<Text c="dimmed" size="sm">
							De idea a resultado real: cada letra describe un paso accionable.
						</Text>
					</div>
				</Group>
				<div className="impulsum-letters-row">
					<div className="impulsum-letters">
						{text.impulsumLetters.map((item, idx) => (
							<button
								key={item.letter + idx}
								type="button"
								className={`impulsum-letter${activeLetter === idx ? " active" : ""}`}
								onMouseEnter={() => setActiveLetter(idx)}
								onFocus={() => setActiveLetter(idx)}
								onClick={() => setActiveLetter(idx)}
								aria-expanded={activeLetter === idx}>
								<span className="impulsum-letter-char">{item.letter}</span>
							</button>
						))}
					</div>
					<div className="impulsum-detail-panel">
						<Text fw={800} size="sm" mb={4}>
							{text.impulsumLetters[activeLetter].title}
						</Text>
						<Text size="sm" c="dimmed">
							{text.impulsumLetters[activeLetter].detail}
						</Text>
					</div>
				</div>
			</Paper>
		</Container>
	);
}

export function SolutionsSection({text}: SectionProps) {
	return (
		<Container size="xl" id="solutions" className="section-shell reveal">
			<Group justify="space-between" align="flex-end" mb="md" wrap="wrap">
				<div>
					<Title order={2}>{text.nav.solutions}</Title>
					<Text c="dimmed">{text.solutionsIntro}</Text>
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

export function TechnologiesSection({text}: SectionProps) {
	const repeated = [...technologyLogos, ...technologyLogos];
	return (
		<Container size="xl" id="technologies" className="section-shell reveal">
			<Title order={2}>{text.nav.technologies}</Title>
			<Text c="dimmed" mb="md">
				{text.technologiesIntro}
			</Text>
			<div className="logo-tape">
				<div className="logo-track">
					{repeated.map((tech, idx) => (
						<div key={`${tech.name}-${idx}`} className="logo-chip">
							{tech.logo ? (
								<Stack className="logo-img" align="center" justify="center" p={0} bg={"white"}>
									<Image src={tech.logo} alt={tech.name} width={44} height={44} style={{objectFit: "contain"}} />
								</Stack>
							) : (
								<Avatar size="md" radius="xl" color="blue">
									{tech.short}
								</Avatar>
							)}
							<Text size="sm" fw={600}>
								{tech.name}
							</Text>
						</div>
					))}
				</div>
			</div>
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

type ContactProps = {
	text: Copy;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onWhatsapp: () => void;
	feedback: string;
	formRef: React.RefObject<HTMLFormElement | null>;
};

export function ContactSection({text, onSubmit, onWhatsapp, feedback, formRef}: ContactProps) {
	return (
		<Container size="xl" id="contact" className="section-shell contact-section reveal">
			<Grid gutter={{base: "lg", md: "xl"}} align="stretch">
				<Grid.Col span={{base: 12, md: 5}}>
					<Stack gap="sm">
						<Badge variant="gradient" size="lg" radius="md">
							{text.contact.title}
						</Badge>
						<Title order={2}>{text.contact.description}</Title>
						<Text c="dimmed">contacto@impulsum.com.ar · +54 9 357 266-7519</Text>
						<Group gap="xs" wrap="wrap">
							{socialLinks.map(({href, label, icon: Icon}) => (
								<ActionIcon
									key={href}
									variant="light"
									size="lg"
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
				</Grid.Col>
				<Grid.Col span={{base: 12, md: 7}}>
					<Paper withBorder p="lg" radius="md" className="contact-card">
						<form ref={formRef} onSubmit={onSubmit}>
							<SimpleGrid cols={{base: 1, sm: 2}} spacing={{base: "sm", sm: "md"}}>
								<TextInput
									name="name"
									required
									label={text.contact.fields.name}
									placeholder={text.contact.fields.name}
								/>
								<TextInput
									name="company"
									label={text.contact.fields.company}
									placeholder={text.contact.fields.company}
								/>
							</SimpleGrid>
							<SimpleGrid cols={{base: 1, sm: 2}} spacing={{base: "sm", sm: "md"}} mt="md">
								<TextInput
									name="email"
									type="email"
									required
									label={text.contact.fields.email}
									placeholder="email@ejemplo.com"
								/>
								<TextInput name="phone" label="Teléfono (opcional)" placeholder="+54..." />
							</SimpleGrid>
							<Textarea
								name="message"
								label={text.contact.fields.message}
								placeholder={text.contact.fields.message}
								minRows={4}
								mt="md"
							/>
							<Group gap="sm" mt="md" wrap="wrap">
								<Button type="submit" variant="gradient" rightSection={<IconSend size={16} />}>
									{text.contact.submit}
								</Button>
								<Button
									type="button"
									variant="outline"
									color="teal"
									rightSection={<IconBrandWhatsapp size={16} />}
									onClick={onWhatsapp}>
									{text.contact.whatsapp}
								</Button>
							</Group>
							{feedback ? (
								<Text mt="sm" c="teal" size="sm" fw={600}>
									{feedback}
								</Text>
							) : null}
						</form>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	);
}

type FooterProps = {text: Copy};

export function FooterSection({text}: FooterProps) {
	return (
		<footer className="site-footer">
			<Container size="xl">
				<Group justify="space-between" align="center" wrap="wrap">
					<div>
						<Text c="dimmed">{text.footer}</Text>
						<Text c="dimmed" size="xs">
							{text.hashtags}
						</Text>
					</div>
					<Group gap="xs">
						<ActionIcon component="a" href="mailto:contacto@impulsum.com.ar" variant="light" aria-label="Email">
							<IconSend size={16} />
						</ActionIcon>
						<ActionIcon component="a" href="https://wa.me/5493572667519" variant="light" aria-label="WhatsApp">
							<IconBrandWhatsapp size={16} />
						</ActionIcon>
					</Group>
				</Group>
			</Container>
		</footer>
	);
}
