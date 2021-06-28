import styles from "../styles/components/ProjectItem.module.scss";

export const ProjectItem: React.FC<Project> = ({ project }) => (
	<div>
		<h2>{project.name}</h2>

		<p>{project.url}</p>
	</div>
);
