import styles from "../styles/Projects.module.scss";

const Project = ({ project }: any) => (
	<div>
		<h2>{project.name}</h2>

		<p>{project.url}</p>
	</div>
);

export default Project;
