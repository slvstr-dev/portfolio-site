import useTranslation from "next-translate/useTranslation";
import { Container } from "../elements/Container";
import { SkillList } from "../elements/SkillList";
import styles from "../../styles/components/blocks/Skills.module.scss";

interface Skills {
	skills: [
		{
			id: number;
			category: string;
			list: string[];
		}
	];
}

export const Skills: React.FC<Skills> = ({ skills }) => {
	const { t } = useTranslation("index");

	return (
		<section id="skills" className={styles.skills}>
			<Container classNames={styles.skills__container}>
				<h2 className={styles.skills__heading}>
					{t("skills_heading")}
				</h2>

				<div className={styles.skills__content}>
					{skills.map((skill, index) => (
						<SkillList key={index} skill={skill} />
					))}
				</div>
			</Container>
		</section>
	);
};
