import { Meta } from "../components/blocks/Meta";
import { ProjectsList } from "../components/blocks/ProjectsList";
import styles from "../shared/styles/pages/Projects.module.scss";

const Projects: React.FC = () => (
	<>
		<Meta title="Home placeholder" />

		<main className={styles.projects}>
			<ProjectsList />
		</main>
	</>
);

export default Projects;
