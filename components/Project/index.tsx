import styles from "./index.module.scss";

interface Project {
	project: {
		id: number;
		name: string;
		url: string;
	};
}

export const Project: React.FC<Project> = ({ project }) => (
	<article className={styles.card}>
		<h2>{project.name}</h2>

		<p>{project.url}</p>
	</article>
);
