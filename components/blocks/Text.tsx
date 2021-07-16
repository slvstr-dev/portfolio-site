import { Container } from "../elements/Container";
import styles from "../../shared/styles/components/blocks/Text.module.scss";

interface Text {
	content: string;
	children?: React.ReactNode;
}

export const Text: React.FC<Text> = ({ content, children }) => (
	<section className={styles.text}>
		<p className={styles.text__content}>{content}</p>

		{children && <div className={styles.text__buttons}>{children}</div>}
	</section>
);
