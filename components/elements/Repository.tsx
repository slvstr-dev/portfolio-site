import styles from "../../shared/styles/components/elements/Repository.module.scss";

interface Repository {
	repository: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	};
}

export const Repository: React.FC<Repository> = ({ repository }) => (
	<a
		href={repository.html_url}
		title={repository.name}
		target="_blank"
		rel="noreferrer noopener"
		key={repository.id}
	>
		<article className={styles.repository__card}>
			<div className={styles.repository__overlay} />

			<img
				className={styles.repository__image}
				src="https://via.placeholder.com/750"
				alt={repository.name}
			/>

			<h3 className={styles.repository__title}>{repository.name}</h3>
		</article>
	</a>
);
