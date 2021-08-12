import { Container } from "../elements/Container";
import styles from "../../styles/components/blocks/Hero.module.scss";

export const Hero: React.FC<{ h1: string }> = ({ h1 }) => (
	<section className={styles.hero}>
		<Container classNames={styles.hero__container}>
			<div className={styles.hero__hero}>
				<h1 className={styles.hero__title}>{h1}</h1>
			</div>
		</Container>
	</section>
);
