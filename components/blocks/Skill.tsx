import Html from "../../public/svg/html.svg";
import Css from "../../public/svg/css.svg";
import JavaScript from "../../public/svg/javascript.svg";
import Tools from "../../public/svg/tools.svg";
import styles from "../../styles/components/blocks/Skill.module.scss";

interface Skill {
	skill: {
		id: number;
		name: string;
		description_nl: string;
		description_en: string;
	};
	locale: string;
}

export const Skill: React.FC<Skill> = ({ skill, locale }) => (
	<div className={styles.skill}>
		{skill.name === "HTML" && <Html className={styles.skill__svg} />}

		{skill.name === "CSS" && <Css className={styles.skill__svg} />}

		{skill.name === "JavaScript" && (
			<JavaScript className={styles.skill__svg} />
		)}

		{skill.name === "Tools" && <Tools className={styles.skill__svg} />}

		<div className={styles.skill__info}>
			<h3 className={styles.skill__title}>{skill.name}</h3>

			<p className={styles.skill__text}>
				{skill.description_nl.includes(locale)
					? skill.description_nl
					: skill.description_en}
			</p>
		</div>
	</div>
);
