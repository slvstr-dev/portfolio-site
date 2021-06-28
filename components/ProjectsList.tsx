import { ProjectItem } from "./ProjectItem";
import styles from "../styles/components/ProjectsList.module.scss";

export const ProjectsList: React.FC<ProjectsList> = ({ projects }) => (
	<section>
		{projects.map((value: ProjectItem) => {
			return <ProjectItem key={value.id} project={value} />;
		})}
	</section>
);
