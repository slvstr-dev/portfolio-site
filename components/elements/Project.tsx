import useTranslation from "next-translate/useTranslation";
import { Button } from "./Button";
import { Container } from "./Container";
import styles from "../../styles/components/elements/project.module.scss";

interface project {
	project: {
		id: number;
		name_nl: string;
		name_en: string;
		description_nl: string;
		description_en: string;
		category: string;
		stack: string[];
		website_url: string;
		repository_url: string;
		image_url: string;
	};
	locale: string;
}

export const Project: React.FC<project> = ({ project, locale }) => {
	const { t } = useTranslation("index");

	return (
		<article>
			<Container>
				<h3 className={styles.project__heading}>
					<span className={styles.project__subheading}>
						{project.category}
					</span>

					{locale === "nl" ? project.name_nl : project.name_en}
				</h3>

				<p className={styles.project__description}>
					{locale === "nl"
						? project.description_nl
						: project.description_en}
				</p>

				<div className={styles.project__stack}>
					<h4 className={styles.project__listHeading}>
						{t("stack_heading")}
					</h4>

					<ul className={styles.project__list}>
						{project.stack.sort().map((item, index) => {
							return (
								<li
									key={index}
									className={styles.project__listItem}
								>
									{item}
								</li>
							);
						})}
					</ul>
				</div>

				<div className={styles.project__buttons}>
					{project.website_url && (
						<Button
							text={project.category}
							href={project.website_url}
							isExternal
						/>
					)}

					{project.repository_url && (
						<Button
							text={t("project_repository")}
							href={project.repository_url}
							isExternal
						/>
					)}
				</div>
			</Container>
		</article>
	);
};
