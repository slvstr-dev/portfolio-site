import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Project } from "../components/blocks/Project";
import useTranslation from "next-translate/useTranslation";
import styles from "../shared/styles/pages/Projects.module.scss";

interface Projects {
	projects: [
		{
			name: string;
			type: string;
			liveUrl: string;
			repositoryUrl: string;
			image: string;
			description: string;
			tags: string[];
		}
	];
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: projects } = await supabase.from("projects").select("*");

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

			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles.projects}
			>
				<Container classNames={styles.projects__container}>
					<h1 className={styles.projects__title}>{t("h1")}</h1>

					<section className={styles.projects__section}>
						{projects.map((project, index) => {
							return <Project key={index} project={project} />;
						})}
					</section>
				</Container>
			</motion.main>
		</>
	);
};

export default Projects;
