import Html from "../../public/svg/html.svg";
import Css from "../../public/svg/css.svg";
import JavaScript from "../../public/svg/javascript.svg";
import Gear from "../../public/svg/gear.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Skills.module.scss";

const skills = ["HTML", "CSS", "JavaScript", "Misc"];

export const Skills: React.FC = () => {
	const { t } = useTranslation("about");

	return (
		<>
			{skills.map((skill, index) => {
				return (
					<section className={styles.skills} key={index}>
						{skill === "HTML" && (
							<Html className={styles.skills__svg} />
						)}

						{skill === "CSS" && (
							<Css className={styles.skills__svg} />
						)}

						{skill === "JavaScript" && (
							<JavaScript className={styles.skills__svg} />
						)}

						{skill === "Misc" && (
							<Gear className={styles.skills__svg} />
						)}

						<div className={styles.skills__info}>
							<h3>
								{skill === "Misc"
									? t(`skills_title_${skill.toLowerCase()}`)
									: skill}
							</h3>

							<div className={styles.skills__content}>
								<p>
									{t(
										`skills_description_${skill.toLowerCase()}`
									)}
								</p>
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
};
