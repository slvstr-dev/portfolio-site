import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Postcard } from "../components/blocks/Postcard";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/pages/Contact.module.scss";

const Contact: React.FC = () => {
	const { t } = useTranslation("contact");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
			/>

			<main className={styles.contact}>
				<Container classNames={styles.contact__container}>
					<h1 className={styles.contact__title}>{t("h1")}</h1>

					<Postcard />
				</Container>
			</main>
		</>
	);
};

export default Contact;
