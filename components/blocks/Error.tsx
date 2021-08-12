import Alert from "../../public/svg/alert.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Error.module.scss";

export const Error: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={styles.error}>
			<Alert className={styles.error__svg} />

			<p className={styles.error__text}>{t("error_message")}</p>
		</div>
	);
};
