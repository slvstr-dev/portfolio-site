import { Container } from "../_elements/Container";
import styles from "./index.module.scss";

export const Quote: React.FC<{ text: string }> = ({ text }) => (
	<section>
		<Container className={styles.intro__container}>
			<p className={styles.intro__text}>{text}</p>
		</Container>
	</section>
);
