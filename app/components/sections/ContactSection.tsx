import {Button, Flex, Group, Stack, Text, Textarea, TextInput, Title} from "@mantine/core";
import {type Copy, socialLinks} from "../../copy";
import {IconBrandWhatsapp, IconSend} from "@tabler/icons-react";
import Image from "next/image";

type ContactProps = {
	text: Copy;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onWhatsapp: () => void;
	feedback: string;
	formRef: React.RefObject<HTMLFormElement | null>;
};

export function ContactSection({text, onSubmit, onWhatsapp, feedback, formRef}: ContactProps) {
	return (
		<section id="contact" className="contact-shell reveal">
			<Stack align="center" pt={"xl"} className="contact-content">
				<Flex align={"center"} gap={"xl"} className="contact-intro">
					<Stack className="contact-intro-copy">
						<Title c={"rgba(0,211,223,1)"}>{text.contact.title.toLocaleUpperCase()}</Title>
						<Text size="lg" c={"rgba(245, 247, 250, 1)"}>
							{text.contact.description}
						</Text>
					</Stack>
					<Image color="rgba(0,211,223,1)" alt="map" src="/contact/map.svg" width={500} height={250} />
				</Flex>

				<form
					className="contact-form"
					ref={formRef}
					onSubmit={onSubmit}>
					<Stack className="contact-form-column" justify="stretch">
						<Flex className={"form-input"}>
							<Text>{text.contact.fields.name}*</Text>
							<TextInput
								className="form-field"
								variant="unstyled"
								name="name"
								required
								placeholder={text.contact.placeholder.name}
							/>
						</Flex>
						<Flex className={"form-input"}>
							<Text>{text.contact.fields.company}</Text>
							<TextInput
								className="form-field"
								variant="unstyled"
								name="company"
								placeholder={text.contact.placeholder.company}
							/>
						</Flex>
						<Flex className={"form-input"}>
							<Text>{text.contact.fields.email}*</Text>
							<TextInput
								className="form-field"
								variant="unstyled"
								name="email"
								type="email"
								required
								placeholder={text.contact.placeholder.email}
							/>
						</Flex>
						<Flex className={"form-input"}>
							<Text>{text.contact.fields.tel}*</Text>
							<TextInput className="form-field" variant="unstyled" name="phone" required placeholder="+54..." />
						</Flex>
					</Stack>
					<Stack className="contact-form-column" justify="stretch">
						<Stack className="form-input" h={"100%"}>
							<Text w={"100%"} ta={"start"}>
								{text.contact.fields.message}*
							</Text>
							<Textarea
								name="message"
								variant="unstyled"
								p={"lg"}
								h={"100%"}
								w={"100%"}
								required
								placeholder={text.contact.placeholder.message}
							/>
						</Stack>
					</Stack>

					{feedback ? (
						<Text mt="sm" c="teal" size="sm" fw={600}>
							{feedback}
						</Text>
					) : null}
				</form>
				<Group gap="sm" mt="md" wrap="wrap">
					<Button
						type="button"
						className="whatsapp-button"
						color="teal"
						rightSection={<IconBrandWhatsapp size={16} />}
						onClick={onWhatsapp}>
						{text.contact.whatsapp}
					</Button>
					<Button
						component="a"
						href="mailto:contacto@impulsum.com.ar"
						className="email-button"
						aria-label="Email"
						leftSection={<IconSend size={16} />}>
						Email
					</Button>
				</Group>
				<Text size={"sm"} c={"rgba(245, 247, 250, 1)"}>
					{text.contact.getUs}
				</Text>
				<Flex className="contact-social-links">
					{socialLinks.map(({href, label, src}) => (
						<Button
							className={"contact-social-links-button"}
							key={href}
							size="lg"
							component="a"
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}>
							<Image alt={label} src={src} width={42} height={42} />
						</Button>
					))}
				</Flex>
			</Stack>
		</section>
	);
}
