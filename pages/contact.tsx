import { Meta } from "../components/blocks/Meta";
import { Postcard } from "../components/blocks/Postcard";
import useTranslation from "next-translate/useTranslation";
import styles from "../shared/styles/pages/Contact.module.scss";

const Contact: React.FC = () => {
	const { t } = useTranslation("contact");

	return (
		<>
			<Meta title={t("meta_title")} description={t("meta_description")} />

			<main className={styles.contact}>
				<h1 className={styles.contact__title}>{t("h1")}</h1>

				<Postcard />
			</main>
		</>
	);
};

export default Contact;
