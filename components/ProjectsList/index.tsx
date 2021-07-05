import { Container } from "../_elements/Container";
import styles from "./index.module.scss";

type projectsList = {
	projects: {
		id: number;
		name: string;
		url: string;
	}[];
};

export const ProjectsList: React.FC<projectsList> = ({ projects }) => (
	<section className={styles.projects}>
		<Container className={styles.projects__container}>
			<h2 className={styles.projects__title}>Projects</h2>

			<div className={styles.projects__cards}>
				{projects.map((project) => {
					return (
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

								<h3 className={styles.project__title}>
									{project.name}
								</h3>
							</article>
						</a>
					);
				})}
			</div>
		</Container>
	</section>
);
