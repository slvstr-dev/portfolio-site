import Link from "next/link";
import { Container } from "../elements/Container";
import { Logo } from "../elements/Logo";
import { Form } from "../elements/Form";
import { Input } from "../elements/Input";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Postcard.module.scss";

export const Postcard: React.FC = () => {
	const { t } = useTranslation("contact");

	return (
		<section className={styles.postcard}>
			<Container classNames={styles.postcard__container}>
				<Link href="/" passHref>
					<a>
						<Logo className={styles.postcard__logo} />
					</a>
				</Link>

				<div className={styles.postcard__postcard}>
					<h4 className={styles.postcard__title}>
						{t("postcard_title")}
					</h4>

					<Form>
						<Input
							type="email"
							placeholder={t("postcard_email_placeholder")}
						/>
					</Form>
				</div>
			</Container>
		</section>
	);
};
