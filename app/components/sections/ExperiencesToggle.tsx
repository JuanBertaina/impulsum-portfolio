import {Stack, Text, Title} from "@mantine/core";
import React, {useState} from "react";
import {type Copy} from "../../copy";

import Image from "next/image";
type Experience = {
	title: string;
	description: string;
	image: string;
	alt: string;
};
export const ExperiencesToggle = ({text, lang, exp}: {lang: string; text: Copy; exp: Experience}) => {
	const [toggleExp, setToggleExp] = useState(false);

	return (
		<Stack align="center" justify="center" key={exp.alt} ta="center" className="experiences-flip">
			<div className={`experiences-inner ${toggleExp ? "is-flipped" : ""}`}>
				{/* FRONT */}
				<div className={`experiences-face experiences-front experiences-card`}>
					<Stack className="experiences-header" align="center" justify="center" ta="center" h={"100%"}>
						<Text c="#60d0dd" fw="bold">
							{`${lang === "es" ? "Experiencias" : "Experiences"} Impulsum`}
						</Text>
						<Title>{exp.title}</Title>

						<button onClick={() => setToggleExp(!toggleExp)} className="experiences-button" type="button">
							{text.experiencesButton}
						</button>
					</Stack>
				</div>

				{/* BACK */}
				<div className="experiences-face experiences-back experiences-card">
					<Stack align="center" justify="center" ta="center">
						<Title order={3}>{lang === "es" ? "Detalle" : "Details"}</Title>
						<Text>{exp.description}</Text>
						<Image
							alt={exp.image}
							src={exp.image}
							width={120}
							height={60}
							loading="lazy"
							style={{userSelect: "none"}}
						/>
						<button onClick={() => setToggleExp(false)} className="experiences-button" type="button">
							{lang === "es" ? "Volver" : "Back"}
						</button>
					</Stack>
				</div>
			</div>
		</Stack>
	);
};
