import {useMemo, useState} from "react";
import {type Copy, technologyLogos} from "../../copy";
import {ActionIcon, Avatar, Button, Container, Flex, Stack, Text} from "@mantine/core";
import Image from "next/image";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";

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
										// <Stack className="logo-img" align="center" justify="center" p={0} bg="white">
										<Image
											src={tech.logo}
											alt={tech.name}
											width={44}
											height={44}
											style={{objectFit: "contain", userSelect: "none"}}
											loading="lazy"
										/>
									) : (
										// </Stack>
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
