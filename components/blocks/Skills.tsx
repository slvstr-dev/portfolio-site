import useTranslation from "next-translate/useTranslation";
import { Container } from "../elements/Container";
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
						<div key={index} className={styles.skills__category}>
							<h3 className={styles.skills__listHeading}>
								{skill.category}
							</h3>

							<ul>
								{skill.list.sort().map((item, index) => {
									return (
										<li
											key={index}
											className={styles.skills__listItem}
										>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};
