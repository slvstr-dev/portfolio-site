import Project from "./Project";
import styles from "../styles/Projects.module.scss";

const Projects = ({ projects }: any) => {
	return (
		<section>
			{projects.map((project: any) => {
				return <Project key={project.id} project={project} />;
			})}
		</section>
	);
};

export default Projects;
