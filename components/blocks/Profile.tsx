import useTranslation from "next-translate/useTranslation";
import { linkedInUrl } from "../../config";
import { Container } from "../elements/Container";
import { Button } from "../elements/Button";
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
								{t("company")} {user.company}
							</li>
							<li>
								{t("location")} {user.location}
							</li>
							<li>
								{t("github")} {user.html_url}
							</li>
						</ul>
					</div>

					<Button
						classNames={styles.profile__button}
						href={linkedInUrl}
						displayChevron={true}
						title={t("cta_linkedin")}
					/>
				</div>
			</Container>
		</section>
	);
};
