import { GetStaticProps } from "next";
import { Meta } from "../components/blocks/Meta";
import { Profile } from "../components/blocks/Profile";
import { Text } from "../components/blocks/Text";
import useTranslation from "next-translate/useTranslation";
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

const About: React.FC<About> = ({ user }) => {
	const { t } = useTranslation("about");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
			/>

			<main className={styles.about}>
				<h1 className={styles.about__title}>{t("h1")}</h1>

				<Profile user={user} />

				<Text content={t("text_content")} />
			</main>
		</>
	);
};

export default About;
