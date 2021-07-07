import useTranslation from "next-translate/useTranslation";
import { Container } from "../elements/Container";
import styles from "../../shared/styles/components/blocks/Footer.module.scss";

export const Footer: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<footer className={styles.copyright}>
			<Container classNames={styles.copyright__container}>
				&copy; {new Date().getFullYear()} {t("copyright")}
				<a
					href="https://accidentallywesanderson.com/"
					target="_blank"
					rel="noreferrer noopener"
				>
					AWA
				</a>
				.
			</Container>
		</footer>
	);
};
