import React from "react";
import {type Copy} from "../../copy";
import {ExperiencesToggle} from "./ExperiencesToggle";

export const ExperiencesSection = ({text, lang}: {text: Copy; lang: string}) => {
	return (
		<section className="experiences-shell reveal" id={"experiences"}>
			{text.experiences.map((exp, i) => {
				return <ExperiencesToggle key={i} text={text} exp={exp} lang={lang} />;
			})}
		</section>
	);
};
