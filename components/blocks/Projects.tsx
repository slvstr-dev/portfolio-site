import { Container } from "../elements/Container";
import { Project } from "../elements/Project";
import styles from "../../shared/styles/components/blocks/Projects.module.scss";

interface Projects {
	title: string;
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
}

export const Projects: React.FC<Projects> = ({ title, projects }) => (
	<section className={styles.projects}>
		<Container classNames={styles.projects__container}>
			<h2 className={styles.projects__title}>{title}</h2>

			{projects.map((project) => {
				return <Project key={project.id} project={project} />;
			})}
		</Container>
	</section>
);
