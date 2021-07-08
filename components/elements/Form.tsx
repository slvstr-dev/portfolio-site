import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/elements/Form.module.scss";

export const Form: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { t } = useTranslation("contact");

	return (
		<form>
			{children}

			<input
				className={styles.form__button}
				type="submit"
				title={t("form_title")}
				value="&gt;"
			/>
		</form>
	);
};
