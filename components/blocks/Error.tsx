import { Container } from "../elements/Container";
import Alert from "../../public/svg/alert.svg";
import styles from "../../styles/components/blocks/Error.module.scss";

interface Error {
	message: string;
}

export const Error: React.FC<Error> = ({ message }) => (
	<section className={styles.error}>
		<Container>
			<div className={styles.error__wrapper}>
				<Alert className={styles.error__svg} />

				<p className={styles.error__text}>{message}</p>
			</div>
		</Container>
	</section>
);
