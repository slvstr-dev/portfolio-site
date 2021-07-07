import projects from "../../shared/data/projects.json";
import { Container } from "../elements/Container";
import { ProjectItem } from "./ProjectItem";
import styles from "../../shared/styles/components/blocks/ProjectsList.module.scss";

export const ProjectsList: React.FC = () => (
	<section className={styles.projectsList}>
		<Container classNames={styles.projectsList__container}>
			<h2 className={styles.projectsList__title}>Projects</h2>

			<div className={styles.projectsList__cards}>
				{projects.map((project) => {
					return <ProjectItem key={project.id} project={project} />;
				})}
			</div>
		</Container>
	</section>
);
