import {Container, Text, Title} from "@mantine/core";
import {SectionProps} from "../Sections";

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
