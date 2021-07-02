import { Container } from "../../misc/Container";
import styles from "./index.module.scss";

export const Intro: React.FC<{ text: string }> = ({ text }) => (
	<section>
		<Container className={styles.intro__container}>
			<p className={styles.intro__text}>{text}</p>
		</Container>
	</section>
);
