import { Button } from "../elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Repository.module.scss";

interface Repository {
	repository: {
		name: string;
		html_url: string;
	};
}

export const Repository: React.FC<Repository> = ({ repository }) => {
	const { t } = useTranslation("projects");

	return (
		<article className={styles.repository}>
			<h3 className={styles.repository__title}>{repository.name}</h3>

			<Button
				classNames={styles.repository__button}
				title={t("repository_cta")}
				href={repository.html_url}
				displayExternal
			/>
		</article>
	);
};
