import Alert from "../../public/svg/alert.svg";
import styles from "../../styles/components/blocks/Error.module.scss";

interface Error {
	message: string;
}

export const Error: React.FC<Error> = ({ message }) => (
	<div className={styles.error}>
		<Alert className={styles.error__svg} />

		<p className={styles.error__text}>{message}</p>
	</div>
);
