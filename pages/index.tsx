import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { Meta } from "../components/blocks/Meta";
import { Hero } from "../components/blocks/Hero";
import { Container } from "../components/elements/Container";
import { Text } from "../components/blocks/Text";
import { Button } from "../components/elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/pages/Home.module.scss";

interface Home {
	developer: {
		home_quote_nl: string;
		home_quote_en: string;
	};
	locale: string;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const { data: developer } = await supabase
		.from("developer")
		.select("home_quote_nl, home_quote_en")
		.limit(1)
		.single();

	return {
		props: {
			developer,
			locale,
		},
	};
};

const Home: React.FC<Home> = ({ developer, locale }) => {
	const { t } = useTranslation("home");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
			/>

			<main className={styles.home}>
				<Hero h1={t("hero_h1")} />

				<Container>
					<Text
						content={
							developer.home_quote_nl.includes(locale)
								? developer.home_quote_nl
								: developer.home_quote_en
						}
					>
						<Button href="/about" text={t("button_about")} />

						<Button href="/projects" text={t("button_projects")} />
					</Text>
				</Container>
			</main>
		</>
	);
};

export default Home;
