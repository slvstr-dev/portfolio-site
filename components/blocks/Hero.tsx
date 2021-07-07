import { Container } from "../elements/Container";
import styles from "../../shared/styles/components/blocks/Hero.module.scss";

export const Hero: React.FC<{ title: string }> = ({ title }) => (
	<section className={styles.hero}>
		<Container classNames={styles.hero__container}>
			<div className={styles.hero__hero}>
				<h1 className={styles.hero__title}>{title}</h1>
			</div>
		</Container>
	</section>
);
