import { GetStaticProps } from "next";
import { linkedInUrl } from "../config";
import { Meta } from "../components/blocks/Meta";
import { Quote } from "../components/blocks/Quote";
import { Container } from "../components/elements/Container";
import { Button } from "../components/elements/Button";
import Chevron from "../public/svg/chevron.svg";
import styles from "../shared/styles/pages/About.module.scss";

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

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://api.github.com/users/slvstr-dev");
	const user = await response.json();

	return {
		props: {
			user,
		},
	};
};

const About: React.FC<About> = ({ user }) => (
	<>
		<Meta title="About" description="About description" />
		<Quote text="Als ‘self-taught’ frontend developer vind ik het belangrijk om met een moderne stack te werken binnen een creatieve en open organisatie, waarin persoonlijke ontwikkeling actief wordt gestimuleerd." />

		<main className={styles.about}>
			<Container classNames={styles.about__container}>
				<img
					className={styles.about__image}
					src={user.avatar_url}
					alt={user.name}
				/>

				<div className={styles.about__info}>
					<h2>{user.name}</h2>

					<div className={styles.about__content}>
						<p>{user.bio}</p>

						<ul>
							<li>Company: {user.company}</li>
							<li>Location: {user.location}</li>
							<li>GitHub: {user.html_url}</li>
						</ul>
					</div>

					<Button
						classNames={styles.about__button}
						href={linkedInUrl}
					>
						Bekijk LinkedIn-profiel
						<Chevron />
					</Button>
				</div>
			</Container>
		</main>
	</>
);

export default About;
