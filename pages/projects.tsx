import { GetStaticProps } from "next";
import projects from "../shared/data/projects.json";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Project } from "../components/blocks/Project";
import { Repository } from "../components/blocks/Repository";
import useTranslation from "next-translate/useTranslation";
import styles from "../shared/styles/pages/Projects.module.scss";

interface Repositories {
	repositories: {
		name: string;
		html_url: string;
	}[];
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(
		"https://api.github.com/users/slvstr-dev/repos"
	);
	const repositories = await response.json();

	return {
		props: {
			repositories,
		},
	};
};

const Projects: React.FC<Repositories> = ({ repositories }) => {
	const { t } = useTranslation("projects");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
			/>

			<main className={styles.projects}>
				<Container classNames={styles.projects__container}>
					<h1 className={styles.projects__title}>{t("h1")}</h1>

					<section className={styles.projects__section}>
						{projects.map((project, index) => {
							return <Project key={index} project={project} />;
						})}
					</section>

					<section className={styles.projects__section}>
						<div className={styles.projects__flexbox}>
							{repositories.map((repository, index) => {
								return (
									<Repository
										key={index}
										repository={repository}
									/>
								);
							})}
						</div>
					</section>
				</Container>
			</main>
		</>
	);
};

export default Projects;
