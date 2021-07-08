import { Input } from "../elements/Input";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/elements/Form.module.scss";

interface Form {
	action: string;
	method: string;
	children: React.ReactNode;
}

export const Form: React.FC<Form> = ({ action, method, children }) => {
	const { t } = useTranslation("contact");

	return (
		<form
			className={styles.form}
			action={action}
			method={method}
			encType="text/plain"
		>
			{children}

			<Input type="submit" value={t("form_submit")} />

			<Input type="reset" value={t("form_reset")} />
		</form>
	);
};
