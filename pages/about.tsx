import { GetStaticProps } from "next";
import { Meta } from "../components/blocks/Meta";
import { Quote } from "../components/blocks/Quote";
import { Profile } from "../components/blocks/Profile";
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

		<main className={styles.about}>
			<Quote text="Als ‘self-taught’ frontend developer vind ik het belangrijk om met een moderne stack te werken binnen een creatieve en open organisatie, waarin persoonlijke ontwikkeling actief wordt gestimuleerd." />

			<Profile user={user} />
		</main>
	</>
);

export default About;
