import projects from "../shared/data/projects.json";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Project } from "../components/blocks/Project";
import useTranslation from "next-translate/useTranslation";
import styles from "../shared/styles/pages/Projects.module.scss";

const Projects: React.FC = () => {
	const { t } = useTranslation("projects");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
			/>

			<main className={styles.projects}>
				<h1 className={styles.projects__title}>{t("h1")}</h1>

				<section className={styles.projects__section}>
					<Container classNames={styles.projects__container}>
						{projects.map((project) => {
							return (
								<Project key={project.id} project={project} />
							);
						})}
					</Container>
				</section>
			</main>
		</>
	);
};

export default Projects;
