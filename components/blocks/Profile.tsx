import { linkedInUrl } from "../../config";
import { Container } from "../elements/Container";
import { Button } from "../elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Profile.module.scss";

interface Profile {
	user: {
		avatar_url: string;
		name: string;
		bio: string;
		company: string;
		location: string;
		html_url: string;
	};
}

export const Profile: React.FC<Profile> = ({ user }) => {
	const { t } = useTranslation("about");

	return (
		<section className={styles.profile}>
			<Container classNames={styles.profile__container}>
				<img
					className={styles.profile__image}
					src={user.avatar_url}
					alt={user.name}
				/>

				<div className={styles.profile__info}>
					<h2>{user.name}</h2>

					<div className={styles.profile__content}>
						<p>
							{t("profile_bio", {
								job: user.bio,
								company: user.company,
								location: user.location,
							})}
						</p>
					</div>

					<div className={styles.profile__buttons}>
						<Button
							href={linkedInUrl}
							title={t("profile_linkedin-cta")}
							displayExternal
						/>

						<Button
							href={user.html_url}
							title={t("profile_github-cta")}
							displayExternal
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
