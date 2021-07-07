import { Button } from "../elements/Button";
import { Tag } from "../elements/Tag";
import styles from "../../shared/styles/components/elements/Repository.module.scss";
import { Project } from "./Project";

interface Repository {
	reverseRow: boolean;
	repository: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	};
}

export const Repository: React.FC<Repository> = ({
	reverseRow,
	repository,
}) => (
	<article
		className={reverseRow ? styles.repositoryReversed : styles.repository}
	>
		<img
			className={styles.repository__image}
			src="https://via.placeholder.com/500x500.png"
			alt={repository.name}
		/>

		<div className={styles.repository__content}>
			<h4 className={styles.repository__subtitle}>
				{repository.created_at}
			</h4>

			<h3 className={styles.repository__title}>{repository.name}</h3>

			<p className={styles.repository__description}>
				{repository.description}
			</p>

			<Button
				classNames={styles.repository__button}
				title="Bekijk op GitHub"
				href={repository.html_url}
			/>

			{/* <Tag tag={tag} /> */}
		</div>
	</article>
);
