import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Error } from "../components/blocks/Error";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/pages/404.module.scss";

const Custom404 = () => {
	const { t } = useTranslation("404");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
				follow={false}
			/>

			<main className={styles.error}>
				<Container>
					<h1 className={styles.error__title}>{t("h1")}</h1>

					<Error message={t("error_message")} />
				</Container>
			</main>
		</>
	);
};

export default Custom404;
