import { Container } from "../elements/Container";
import styles from "../../shared/styles/components/blocks/Quote.module.scss";

export const Quote: React.FC<{ quote: string }> = ({ quote }) => (
	<section className={styles.quote}>
		<Container classNames={styles.quote__container}>
			<p className={styles.quote__text}>{quote}</p>
		</Container>
	</section>
);
