import { Container } from "../elements/Container";
import styles from "../../shared/styles/components/Quote.module.scss";

export const Quote: React.FC<{ text: string }> = ({ text }) => (
	<Container classNames={styles.intro__container}>
		<p className={styles.intro__text}>{text}</p>
	</Container>
);
