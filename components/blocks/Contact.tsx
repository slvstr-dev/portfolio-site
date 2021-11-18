import { Container } from "../elements/Container";
import { Button } from "../elements/Button";
import Mailbox from "../../public/svg/mailbox.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/Contact.module.scss";

export const Contact: React.FC = () => {
	const { t } = useTranslation("index");

	return (
		<section id="contact" className={styles.contact}>
			<Container>
				<Mailbox className={styles.contact__svg} />

				<h2 className={styles.contact__heading}>
					<span className={styles.contact__subheading}>
						{t("contact_subheading")}
					</span>

					{t("contact_heading")}
				</h2>

				<Button
					classNames={styles.contact__button}
					text={t("contact_button")}
					href="mailto:hello@slvstr.dev"
				/>
			</Container>
		</section>
	);
};
