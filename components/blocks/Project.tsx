import Image from "next/image";
import { Button } from "../elements/Button";
import { Tag } from "../elements/Tag";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/Project.module.scss";

interface Project {
	project: {
		id: number;
		name_nl: string;
		name_en: string;
		type_nl: string;
		type_en: string;
		description_nl: string;
		description_en: string;
		tags: string[];
		live_url: string;
		repository_url: string;
		certificate_url: string;
		image_url: string;
	};
	locale: string;
}

export const Project: React.FC<Project> = ({ project, locale }) => {
	const { t } = useTranslation("projects");

	return (
		<article className={styles.project}>
			<div className={styles.project__banner}>
				<Image
					className={styles.project__image}
					src={project.image_url}
					alt={locale === "nl" ? project.name_nl : project.name_en}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>

				<div className={styles.project__overlay} />

				<div className={styles.project__header}>
					<h3 className={styles.project__type}>
						{locale === "nl" ? project.type_nl : project.type_en}
					</h3>

					<h2 className={styles.project__title}>
						{locale === "nl" ? project.name_nl : project.name_en}
					</h2>

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
					{locale === "nl"
						? project.description_nl
						: project.description_en}
				</p>

				{project.tags.map((tag, index) => {
					return <Tag tag={tag} key={index} />;
				})}
			</div>
		</article>
	);
};
