import projects from "../shared/data/projects.json";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Project } from "../components/blocks/Project";
import styles from "../shared/styles/pages/Projects.module.scss";

const Projects: React.FC = () => (
	<>
		<Meta title="Home placeholder" />

		<main className={styles.projects}>
			<Container classNames={styles.projects__container}>
				<h2 className={styles.projects__title}>Projects</h2>

				<div className={styles.projects__cards}>
					{projects.map((project) => {
						return <Project key={project.id} project={project} />;
					})}
				</div>
			</Container>
		</main>
	</>
);

export default Projects;
