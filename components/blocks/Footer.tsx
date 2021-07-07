import { Container } from "../elements/Container";
import styles from "../../shared/styles/components/blocks/Footer.module.scss";

export const Footer: React.FC = () => (
	<footer className={styles.copyright}>
		<Container classNames={styles.copyright__container}>
			&copy; {new Date().getFullYear()} Created by slvstr.dev.
		</Container>
	</footer>
);
