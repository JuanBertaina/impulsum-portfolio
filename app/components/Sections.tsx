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
import {useEffect, useMemo, useRef, useState} from "react";
import {socialLinks, technologyLogos, type Copy} from "../copy";

type SectionProps = {text: Copy};

type HeroProps = {
	text: Copy;
	onPrimary: () => void;
	onSecondary: () => void;
};
export function HeroSection({text, onPrimary, onSecondary}: HeroProps) {
	const PAGE_SIZE = 5; // Cantidad de logos a mostrar por "página" en el carrusel
	const [page, setPage] = useState(0);

	const pageCount = Math.max(1, Math.ceil(technologyLogos.length / PAGE_SIZE));

	const visible = useMemo(() => {
		const start = page * PAGE_SIZE;
		return technologyLogos.slice(start, start + PAGE_SIZE);
	}, [technologyLogos, page]);

	const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
	const next = () => setPage((p) => (p + 1) % pageCount);

	// Si cambia la cantidad y la page queda fuera, la corregimos:
	if (page > pageCount - 1) setPage(pageCount - 1);

	return (
		<section className="hero-shell reveal" id="hero">
			<Container size="xl" className="hero-shell__inner">
				<Stack gap={"lg"} align="center" justify="center" maw={"60%"}>
					<h1 className="hero-h1">{text.heroTitle}</h1>
					<Text size="md" ta={"center"}>
						{text.heroLead}
					</Text>
					<Flex justify={"center"} gap="sm" wrap="wrap" w={"100%"}>
						<Button size="lg" w={"35%"} className="hero-primary-btn" onClick={onPrimary}>
							{text.heroCTA}
						</Button>
						<Button size="lg" w={"35%"} className="hero-secondary-btn" onClick={onSecondary}>
							{text.heroSecondary}
						</Button>
					</Flex>
					{/* <Group gap="lg" mt="sm" wrap="wrap">
								{heroStats.map((stat) => (
									<Paper key={stat.label} withBorder p="md" radius="md" className="stat-card">
										<Text fw={700}>{stat.value}</Text>
										<Text size="sm" c="dimmed">
											{stat.label}
										</Text>
									</Paper>
								))}
							</Group> */}
					<div className="logo-tape">
						<ActionIcon
							size={"md"}
							variant="transparent"
							onClick={prev}
							aria-label="Anterior"
							disabled={pageCount <= 1}>
							<IconChevronLeft size={30} />
						</ActionIcon>
						<div className="logo-track paged">
							{visible.map((tech, idx) => (
								<div key={`${tech.name}-${idx}`} className="logo-chip">
									{tech.logo ? (
										<Stack className="logo-img" align="center" justify="center" p={0} bg="white">
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
						<ActionIcon size={"md"} variant="transparent" onClick={next} aria-label="Siguiente">
							<IconChevronRight size={30} />
						</ActionIcon>
					</div>
				</Stack>
			</Container>
		</section>
	);
}

export function ServicesCarousel({text}: {text: any}) {
	const services = text.services ?? [];
	const count = services.length;

	const loop = useMemo(() => [...services, ...services], [services]);

	const HOLD_MS = 3000;
	const MOVE_MS = 600;

	const [index, setIndex] = useState(0); // 0..count-1
	const [paused, setPaused] = useState(false);
	const [animate, setAnimate] = useState(true);

	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		if (!count) return;

		const schedule = () => {
			// hold
			timerRef.current = window.setTimeout(() => {
				setAnimate(true);
				setIndex((i) => i + 1);
			}, HOLD_MS);
		};

		if (!paused) schedule();

		return () => {
			if (timerRef.current) window.clearTimeout(timerRef.current);
		};
	}, [paused, count, index]);

	// cuando pasamos al duplicado (index === count), hacemos “snap” a 0 sin animación
	useEffect(() => {
		if (!count) return;

		if (index === count) {
			// terminamos de animar hacia la copia duplicada...
			const t = window.setTimeout(() => {
				setAnimate(false); // desactiva transition
				setIndex(0); // snap al inicio
				// reactivamos animación en el próximo frame
				requestAnimationFrame(() => setAnimate(true));
			}, MOVE_MS);

			return () => window.clearTimeout(t);
		}
	}, [index, count]);

	if (!count) return null;

	return (
		<div className="services-shell">
			<Container size="xl" className="services-shell__inner">
				<div className="services-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
					<div className="services-viewport">
						<h3 style={{color: "rgba(0, 211, 223, 1)", margin: 0, textAlign: "center"}}>{text.nav.services}</h3>
						<div
							className={`services-track ${animate ? "is-animating" : ""}`}
							style={{
								transform: `translateX(-${index * 100}%)`,
								["--moveMs" as any]: `${MOVE_MS}ms`,
							}}>
							{loop.map((service, idx) => (
								<div className="services-slide" key={`${service.title}-${idx}`}>
									<Card padding="lg" radius="md" withBorder className="services-card" w="100%" h="100%">
										<Title order={1} className="services-card__title" c="rgba(245, 247, 250, 1)" fw={700}>
											{service.title}
										</Title>
										<Text c="rgba(245, 247, 250, 1)" size="md">
											{service.description}
										</Text>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export function ServicesSection({text}: SectionProps) {
	return <ServicesCarousel text={text} />;
}

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

export function TechnologiesSection({text}: SectionProps) {
	return (
		<Container size="xl" id="technologies" className="section-shell reveal">
			<Title order={2}>{text.nav.technologies}</Title>
			<Text c="dimmed" mb="md">
				{text.technologiesIntro}
			</Text>
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
					<div className="footer-copy">
						<Text c="dimmed">{text.footer}</Text>
					</div>
					<Text className="footer-hashtags" c="dimmed" size="xs">
						{text.hashtags}
					</Text>
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
