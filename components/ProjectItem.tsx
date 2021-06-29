import styles from "../styles/components/ProjectItem.module.scss";

interface ProjectItem {
	project: {
		id: number;
		name: string;
		url: string;
	};
}

export const ProjectItem: React.FC<ProjectItem> = ({ project }) => (
	<div>
		<h2>{project.name}</h2>

		<p>{project.url}</p>
	</div>
);
