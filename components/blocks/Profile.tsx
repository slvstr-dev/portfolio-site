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

				<div className={styles.about__info}>
					<h2>{user.name}</h2>

					<div className={styles.profile__content}>
						<p>{user.bio}</p>

						<ul>
							<li>
								{t("profile_company")} {user.company}
							</li>
							<li>
								{t("profile_location")} {user.location}
							</li>
							<li>
								{t("profile_github")} {user.html_url}
							</li>
						</ul>
					</div>

					<Button
						classNames={styles.profile__button}
						href={linkedInUrl}
						title={t("profile_cta")}
						displayChevron
					/>
				</div>
			</Container>
		</section>
	);
};
