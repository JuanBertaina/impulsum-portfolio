import {ActionIcon, Container, Group, Text} from "@mantine/core";
import {Copy} from "../../copy";
import {IconBrandWhatsapp, IconSend} from "@tabler/icons-react";

type FooterProps = {text: Copy};

export function FooterSection({text}: FooterProps) {
	return (
		<footer className="site-footer reveal">
			<Container size="xl" ta={"left"} w={"70%"}>
				<Group justify="space-between" align="center" wrap="wrap">
					<div className="footer-copy">
						<Text c="dimmed">{text.footer}</Text>
					</div>
					<Text className="footer-hashtags" c="dimmed" size="xs">
						{text.hashtags}
					</Text>
				</Group>
			</Container>
		</footer>
	);
}
