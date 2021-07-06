import { Container } from "../_elements/Container";
import styles from "./index.module.scss";

export const Hero: React.FC<{ title: string }> = ({ title }) => (
	<section className={styles.hero}>
		<Container className={styles.hero__container}>
			<h1 className={styles.hero__title}>{title}</h1>
		</Container>
	</section>
);
