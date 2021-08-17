import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Project } from "../components/blocks/Project";
import { Error } from "../components/blocks/Error";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/pages/Projects.module.scss";

interface Projects {
	projects: [
		{
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
		}
	];
	locale: string;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
			locale,
		},
	};
};

const Projects: React.FC<Projects> = ({ projects, locale }) => {
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
										locale={locale}
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
