import { Container } from "../elements/Container";
import styles from "../../shared/styles/components/blocks/Quote.module.scss";

export const Quote: React.FC<{ text: string }> = ({ text }) => (
	<div className={styles.intro}>
		<Container classNames={styles.intro__container}>
			<p className={styles.intro__text}>{text}</p>
		</Container>
	</div>
);
