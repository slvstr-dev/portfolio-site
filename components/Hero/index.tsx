import { Container } from "../_elements/Container";
import styles from "./index.module.scss";

export const Hero: React.FC<{ title: string }> = ({ title }) => (
	<div className={styles.hero}>
		<Container classNames={styles.hero__container}>
			<h1 className={styles.hero__title}>{title}</h1>
		</Container>
	</div>
);
