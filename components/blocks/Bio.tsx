import { linkedInUrl } from "../../config";
import { Container } from "../elements/Container";
import { Button } from "../elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Bio.module.scss";

interface Bio {
	user: {
		avatar_url: string;
		name: string;
		bio: string;
		company: string;
		location: string;
		html_url: string;
	};
}

export const Bio: React.FC<Bio> = ({ user }) => {
	const { t } = useTranslation("about");

	return (
		<section className={styles.bio}>
			<Container classNames={styles.bio__container}>
				<img
					className={styles.bio__image}
					src={user.avatar_url}
					alt={user.name}
				/>

				<div className={styles.bio__info}>
					<h2 className={styles.bio__title}>{user.name}</h2>

					<div className={styles.bio__content}>
						<p>
							{t("profile_bio", {
								job: user.bio,
								company: user.company,
								location: user.location,
							})}
						</p>
					</div>

					<div className={styles.bio__buttons}>
						<Button
							href={linkedInUrl}
							title={t("profile_linkedin-cta")}
							isExternal
						/>

						<Button
							href={user.html_url}
							title={t("profile_github-cta")}
							isExternal
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
