import { Meta } from "../components/blocks/Meta";
import { Hero } from "../components/blocks/Hero";
import { Text } from "../components/blocks/Text";
import { Button } from "../components/elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../shared/styles/pages/Home.module.scss";

const buttons = [
	{ title: "about", path: "/about" },
	{ title: "projects", path: "/projects" },
];

const Home: React.FC = () => {
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

				<Text content={t("text_content")}>
					{buttons.map((button, index) => {
						return (
							<Button
								title={t(`button_${button.title}`)}
								href={button.path}
								key={index}
								displayChevron
							/>
						);
					})}
				</Text>
			</main>
		</>
	);
};

export default Home;
