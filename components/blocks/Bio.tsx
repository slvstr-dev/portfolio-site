import { gitHubUrl, linkedInUrl, portfolioUrl } from "../../config";
import { Container } from "../elements/Container";
import { Button } from "../elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Bio.module.scss";

interface Bio {
	developer: {
		name: string;
		description: string;
		image_url: string;
		about_quote: string;
	};
}

export const Bio: React.FC<Bio> = ({ developer }) => {
	const { t } = useTranslation("about");

	return (
		<section className={styles.bio}>
			<Container classNames={styles.bio__container}>
				<img
					className={styles.bio__image}
					src={developer.image_url}
					alt={developer.name}
				/>

				<div className={styles.bio__info}>
					<h2 className={styles.bio__title}>{developer.name}</h2>

					<p className={styles.bio__text}>{developer.description}</p>

					<div className={styles.bio__buttons}>
						<Button
							href={gitHubUrl}
							text={t("profile_github-cta")}
							isExternal
						/>

						<Button
							href={linkedInUrl}
							text={t("profile_linkedin-cta")}
							isExternal
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
