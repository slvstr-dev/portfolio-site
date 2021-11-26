import useTranslation from "next-translate/useTranslation";
import { Container } from "../elements/Container";
import styles from "../../styles/components/blocks/Footer.module.scss";

export const Footer: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<footer className={styles.footer}>
			<Container classNames={styles.footer__container}>
				&copy; {new Date().getFullYear()} {t("footer_copyright")}
				<a
					href="https://accidentallywesanderson.com/"
					target="_blank"
					rel="noreferrer noopener"
				>
					AWA
				</a>
			</Container>
		</footer>
	);
};
