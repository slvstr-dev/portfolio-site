import { GetStaticProps } from "next";
import projects from "../shared/data/projects.json";
import { Meta } from "../components/blocks/Meta";
import { Projects } from "../components/blocks/Projects";
import { Repositories } from "../components/blocks/Repositories";
import styles from "../shared/styles/pages/Portfolio.module.scss";

interface Portfolio {
	projects: {
		id: number;
		url: string;
		image: string;
		title: string;
		subtitle: string;
		description: string;
		button_text: string;
		tags: string[];
	}[];
	repositories: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
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
			projects,
			repositories,
		},
	};
};

const Portfolio: React.FC<Portfolio> = ({ projects, repositories }) => (
	<>
		<Meta title="Home placeholder" />

		<main className={styles.portfolio}>
			<h1 className={styles.portfolio__title}>Projects & repositories</h1>

			<Projects projects={projects} />

			<Repositories repositories={repositories} />
		</main>
	</>
);

export default Portfolio;
