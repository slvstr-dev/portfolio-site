import { GetStaticProps } from "next";
import { Meta } from "../components/blocks/Meta";
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
			<h1 className={styles.about__title}>About</h1>

			<Profile user={user} />
		</main>
	</>
);

export default About;
