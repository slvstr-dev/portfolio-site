import styles from "../../shared/styles/components/blocks/ProjectItem.module.scss";

interface ProjectItem {
	project: {
		id: number;
		name: string;
		url: string;
	};
}

export const ProjectItem: React.FC<ProjectItem> = ({ project }) => (
	<a
		href={project.url}
		title={project.name}
		target="_blank"
		rel="noreferrer noopener"
		key={project.id}
	>
		<article className={styles.project__card}>
			<div className={styles.project__overlay}></div>

			<img
				className={styles.project__image}
				src="https://via.placeholder.com/750"
				alt={project.name}
			/>

			<h3 className={styles.project__title}>{project.name}</h3>
		</article>
	</a>
);
