import React from "react";
import {type Copy} from "../../copy";

import {Flex, Stack, Text, Title} from "@mantine/core";
import Image from "next/image";

export const FrameworkSection = ({text}: {text: Copy}) => {
	return (
		<section
			className="framework-shell reveal"
			style={{width: "100%", color: "rgba(245, 247, 250, 1)"}}
			id={"framework"}>
			<Stack className="">
				<Stack py={"md"} gap={"xs"}>
					<Title fw={"bolder"} pb={"md"} c={"rgba(0, 211, 223, 1)"}>
						{text.framework.title.toLocaleUpperCase()}
					</Title>
					<Stack gap={0}>
						<Text fw={"bold"}>{text.framework.subtitle}</Text>
						<Text fw={"lighter"}>{text.framework.description}</Text>
					</Stack>
				</Stack>
				<div className="framework-grid">
					{text.framework.parts.map((part) => {
						return (
							<Stack className="framework-card" key={part.title}>
								{/* <Stack justify="space-between" gap={"md"} h={"50%"}> */}
								<Title order={2} c={"rgba(0, 211, 223, 1)"}>
									{part.title}
								</Title>
								<Text pt={"md"} fw={"bolder"}>
									{part.subtitle}
								</Text>
								{/* </Stack> */}
								<Text size="sm" fw={"lighter"}>
									{part.description}
								</Text>
							</Stack>
						);
					})}
				</div>
				<Flex className="framework-qa">
					<Title c={"rgba(0,211,223,1)"} fw={"lighter"}>
						{text.framework.question}{" "}
					</Title>
					<Title c={"rgba(0, 211, 223, 1)"} fw={"bolder"}>
						{"Impulsum Framework?"}
					</Title>
				</Flex>
				<Flex className="framework-answer-list">
					{text.framework.answer.map((ans, i) => {
						return (
							<Stack key={i} align={"center"} gap={"xs"}>
								<Image
									alt={ans.description}
									src={ans.logo}
									width={"64"}
									height={"48"}
									loading="lazy"
									style={{userSelect: "none"}}
								/>
								<Text size="sm" fw={"lighter"} w={"70%"} ta={"center"}>
									{ans.description}
								</Text>
							</Stack>
						);
					})}
				</Flex>
			</Stack>
		</section>
	);
};
