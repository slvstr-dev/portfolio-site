import { linkedInUrl } from "../../config";
import { Container } from "../_elements/Container";
import { Button } from "../_elements/Button";
import Chevron from "../../public/svg/chevron.svg";
import styles from "./index.module.scss";

interface About {
	user: {
		avatar_url: string;
		name: string;
		bio: string;
		company: string;
		location: string;
		html_url: string;
	};
}

export const About: React.FC<About> = ({ user }) => (
	<section className={styles.bio}>
		<Container className={styles.bio__container}>
			<img
				className={styles.bio__image}
				src={user.avatar_url}
				alt={user.name}
			/>

			<div className={styles.bio__info}>
				<h2>{user.name}</h2>

				<div className={styles.bio__content}>
					<p>{user.bio}</p>

					<ul>
						<li>Company: {user.company}</li>
						<li>Location: {user.location}</li>
						<li>GitHub: {user.html_url}</li>
					</ul>
				</div>

				<Button className={styles.bio__button} href={linkedInUrl}>
					Bekijk LinkedIn-profiel
					<Chevron />
				</Button>
			</div>
		</Container>
	</section>
);
