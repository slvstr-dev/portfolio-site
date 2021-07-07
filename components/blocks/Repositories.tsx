import { Container } from "../elements/Container";
import { Repository } from "../elements/Repository";
import styles from "../../shared/styles/components/blocks/Repositories.module.scss";

interface Repositories {
	repositories: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	}[];
}

export const Repositories: React.FC<Repositories> = ({ repositories }) => (
	<section className={styles.repositories}>
		<Container classNames={styles.repositories__container}>
			<h2 className={styles.repositories__title}>Repositories</h2>

			<div className={styles.repositories__cards}>
				{repositories.map((repository) => {
					return (
						<Repository
							key={repository.id}
							repository={repository}
						/>
					);
				})}
			</div>
		</Container>
	</section>

	// <article className={styles.project}>
	// 	<img
	// 		className={styles.project__image}
	// 		src={project.image}
	// 		alt={project.title}
	// 	/>

	// 	<div className={styles.project__content}>
	// 		<span className={styles.project__subtitle}>{project.title}</span>

	// 		<h3 className={styles.project__title}>{project.title}</h3>

	// 		<p className={styles.project__description}>{project.description}</p>

	// 		<Button href={project.url} title="Bekijk project" />
	// 	</div>

	// 	<div className={styles.project__tags}>
	// 		<h4>Tools & technologies</h4>

	// 		{project.tags.map((tag, index) => {
	// 			return <Tag tag={tag} key={index} />;
	// 		})}
	// 	</div>
	// </article>
);
