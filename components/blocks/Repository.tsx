import { Button } from "../elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Repository.module.scss";

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
}) => {
	const { t } = useTranslation("repositories");
	const date = new Date(repository.created_at);
	const formattedCreatedAtDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

	return (
		<article
			className={
				reverseRow ? styles.repositoryReversed : styles.repository
			}
		>
			<img
				className={styles.repository__image}
				src="https://via.placeholder.com/500x500.png"
				alt={repository.name}
			/>

			<div className={styles.repository__content}>
				<h4 className={styles.repository__subtitle}>
					{`${t("repository_createdAt")} ${formattedCreatedAtDate}`}
				</h4>

				<h3 className={styles.repository__title}>{repository.name}</h3>

				<p className={styles.repository__description}>
					{repository.description}
				</p>

				<Button
					title={t("repository_cta")}
					href={repository.html_url}
				/>
			</div>
		</article>
	);
};
