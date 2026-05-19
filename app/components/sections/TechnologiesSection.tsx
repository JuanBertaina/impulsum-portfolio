import {Container, Text, Title} from "@mantine/core";
import type {SectionProps} from "../Sections";

export function TechnologiesSection({text}: SectionProps) {
	const title = "technologies" in text.nav ? String(text.nav.technologies) : "Tecnologías";
	const intro = "technologiesIntro" in text ? String(text.technologiesIntro) : "";

	return (
		<Container size="xl" id="technologies" className="section-shell reveal">
			<Title order={2}>{title}</Title>
			{intro ? (
				<Text c="dimmed" mb="md">
					{intro}
				</Text>
			) : null}
		</Container>
	);
}
