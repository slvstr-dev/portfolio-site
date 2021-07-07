import { Button } from "../elements/Button";
import { Tag } from "../elements/Tag";
import styles from "../../shared/styles/components/elements/Project.module.scss";

interface Project {
	project: {
		id: number;
		url: string;
		image: string;
		title: string;
		subtitle: string;
		description: string;
		button_text: string;
		tags: string[];
	};
}

export const Project: React.FC<Project> = ({ project }) => (
	<article className={styles.project}>
		<div
			className={styles.project__banner}
			style={{ backgroundImage: `url(${project.image})` }}
		>
			<div className={styles.project__overlay} />

			<div className={styles.project__header}>
				<h4 className={styles.project__subtitle}>{project.subtitle}</h4>

				<h3 className={styles.project__title}>{project.title}</h3>

				<Button
					classNames={styles.project__button}
					title={project.button_text}
					href={project.url}
				/>
			</div>
		</div>

		<div className={styles.project__content}>
			<p className={styles.project__description}>{project.description}</p>

			{project.tags.map((tag, index) => {
				return <Tag tag={tag} key={index} />;
			})}
		</div>
	</article>
);
