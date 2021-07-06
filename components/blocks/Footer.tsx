import Link from "next/link";
import { Container } from "../elements/Container";
import { Logo } from "../elements/Logo";
import { Form } from "../elements/Form";
import { Input } from "../elements/Input";
import styles from "../../shared/styles/components/Footer.module.scss";

export const Footer: React.FC = () => (
	<footer className={styles.copyright}>
		<Container classNames={styles.copyright__container}>
			&copy; {new Date().getFullYear()} Created by slvstr.dev.
		</Container>
	</footer>
);
