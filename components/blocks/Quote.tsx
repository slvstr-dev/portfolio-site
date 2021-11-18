import { Container } from "../elements/Container";
import styles from "../../styles/components/blocks/Quote.module.scss";

export const Quote: React.FC<{ quote: string }> = ({ quote }) => (
	<section className={styles.quote}>
		<Container classNames={styles.quote__container}>
			<p className={styles.quote__content}>{quote}</p>
		</Container>
	</section>
);
