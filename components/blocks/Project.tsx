import { Button } from "../elements/Button";
import { Tag } from "../elements/Tag";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Project.module.scss";

interface Project {
	project: {
		url: string;
		image: string;
		title: string;
		subtitle: string;
		description: string;
		tags: string[];
	};
}

export const Project: React.FC<Project> = ({ project }) => {
	const { t } = useTranslation("projects");

	return (
		<article className={styles.project}>
			<div
				className={styles.project__banner}
				style={{ backgroundImage: `url(${project.image})` }}
			>
				<div className={styles.project__overlay} />

				<div className={styles.project__header}>
					<h4 className={styles.project__subtitle}>
						{project.subtitle}
					</h4>

					<h2 className={styles.project__title}>{project.title}</h2>

					<Button
						classNames={styles.project__button}
						title={t("project_cta")}
						href={project.url}
						displayExternal
					/>
				</div>
			</div>

			<div className={styles.project__content}>
				<p className={styles.project__description}>
					{project.description}
				</p>

				{project.tags.map((tag, index) => {
					return <Tag tag={tag} key={index} />;
				})}
			</div>
		</article>
	);
};
