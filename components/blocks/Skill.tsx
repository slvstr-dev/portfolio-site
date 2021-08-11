import Html from "../../public/svg/html.svg";
import Css from "../../public/svg/css.svg";
import JavaScript from "../../public/svg/javascript.svg";
import Tools from "../../public/svg/tools.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Skill.module.scss";

interface Skill {
	skill: string;
}

export const Skill: React.FC<Skill> = ({ skill }) => {
	const { t } = useTranslation("about");

	return (
		<div className={styles.skill}>
			{skill === "HTML" && <Html className={styles.skill__svg} />}

			{skill === "CSS" && <Css className={styles.skill__svg} />}

			{skill === "JavaScript" && (
				<JavaScript className={styles.skill__svg} />
			)}

			{skill === "Tools" && <Tools className={styles.skill__svg} />}

			<div className={styles.skill__info}>
				<h3 className={styles.skill__title}>{skill}</h3>

				<div className={styles.skill__content}>
					<p>{t(`skill_description_${skill.toLowerCase()}`)}</p>
				</div>
			</div>
		</div>
	);
};
