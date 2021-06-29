import { ProjectItem } from "./ProjectItem";
import styles from "../styles/components/ProjectsList.module.scss";

type ProjectsList = {
	projects: {
		id: number;
		name: string;
		url: string;
	}[];
};

export const ProjectsList: React.FC<ProjectsList> = ({ projects }) => (
	<section>
		{projects.map((value) => {
			return <ProjectItem key={value.id} project={value} />;
		})}
	</section>
);
