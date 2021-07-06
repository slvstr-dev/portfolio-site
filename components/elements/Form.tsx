import styles from "../../shared/styles/components/Form.module.scss";

export const Form: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<form>
		{children}

		<input className={styles.form__button} type="submit" value="&gt;" />
	</form>
);
