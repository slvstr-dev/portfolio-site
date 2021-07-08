import { Meta } from "../components/blocks/Meta";
import { Hero } from "../components/blocks/Hero";
import { Quote } from "../components/blocks/Quote";
import useTranslation from "next-translate/useTranslation";
import styles from "../shared/styles/pages/Home.module.scss";

const Home: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<>
			<Meta title={t("meta_title")} description={t("meta_description")} />

			<main className={styles.home}>
				<Hero h1={t("hero_h1")} />

				<Quote quote={t("quote_text")} />
			</main>
		</>
	);
};

export default Home;
