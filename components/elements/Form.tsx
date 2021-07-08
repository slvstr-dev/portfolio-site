import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/elements/Form.module.scss";

interface Form {
	classNames: string;
	action: string;
	method: string;
	children: React.ReactNode;
}

export const Form: React.FC<Form> = ({
	classNames,
	action,
	method,
	children,
}) => {
	const { t } = useTranslation("contact");

	return (
		<form
			className={`${styles.form} ${classNames}`}
			action={action}
			method={method}
			encType="text/plain"
		>
			{children}
		</form>
	);
};
