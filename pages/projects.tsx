import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Project } from "../components/blocks/Project";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/pages/Projects.module.scss";
import { Error } from "../components/blocks/Error";

interface Projects {
	projects: [
		{
			id: number;
			name: string;
			type: string;
			live_url: string;
			repository_url: string;
			certificate_url: string;
			image_url: string;
			description: string;
			tags: string[];
		}
	];
}

export const getStaticProps: GetStaticProps = async () => {
	const {
		data: projects,
		status,
		error,
	} = await supabase
		.from("projects")
		.select()
		.order("id", { ascending: false });

	if (status !== 200 || error) {
		return { props: {} };
	}

	return {
		props: {
			projects,
		},
	};
};

const Projects: React.FC<Projects> = ({ projects }) => {
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

					{projects ? (
						<section className={styles.projects__section}>
							{projects.map((project) => {
								return (
									<Project
										key={project.id}
										project={project}
									/>
								);
							})}
						</section>
					) : (
						<Error message={t("error_message")} />
					)}
				</Container>
			</main>
		</>
	);
};

export default Projects;
