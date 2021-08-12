import { Button } from "../elements/Button";
import { Tag } from "../elements/Tag";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Project.module.scss";

interface Project {
	project: {
		id: number;
		name: string;
		type: string;
		live_url: string;
		repository_url: string;
		certificate_url: string;
		image_url: string;
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
				style={{ backgroundImage: `url(${project.image_url})` }}
			>
				<div className={styles.project__overlay} />

				<div className={styles.project__header}>
					<h4 className={styles.project__subtitle}>{project.type}</h4>

					<h2 className={styles.project__title}>{project.name}</h2>

					<div className={styles.project__buttons}>
						{project.live_url !== null && (
							<Button
								classNames={styles.project__button}
								text={t("project_cta")}
								href={project.live_url}
								isExternal
							/>
						)}

						{project.repository_url !== null && (
							<Button
								classNames={styles.project__button}
								text={t("repository_cta")}
								href={project.repository_url}
								isExternal
							/>
						)}

						{project.certificate_url !== null && (
							<Button
								classNames={styles.project__button}
								text={t("certificate_cta")}
								href={project.certificate_url}
								isExternal
							/>
						)}
					</div>
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
