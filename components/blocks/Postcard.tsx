import { Form } from "../elements/Form";
import { Input } from "../elements/Input";
import { Textarea } from "../elements/Textarea";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Postcard.module.scss";

export const Postcard: React.FC = () => {
	const { t } = useTranslation("contact");

	return (
		<section className={styles.postcard}>
			<div className={styles.postcard__content}>
				<Form
					classNames={styles.postcard__form}
					action={`mailto:hello@slvstr.dev?subject=${t(
						"form_subject"
					)}`}
					method="post"
				>
					<div className={styles.postcard__message}>
						<Textarea
							name={t("form_message_label")}
							placeholder={t("form_message_placeholder")}
							required
						/>
					</div>

					<div className={styles.postcard__contact}>
						<span className={styles.postcard__stamp}>
							SLV
							<br />
							STR
						</span>

						<Input
							type="text"
							name={t("form_name_label")}
							placeholder={t("form_name_placeholder")}
							required
						/>

						<Input
							type="tel"
							name={t("form_tel_label")}
							placeholder={t("form_tel_placeholder")}
							required={false}
						/>

						<div className={styles.postcard__buttons}>
							<Input type="submit" value={t("form_submit")} />

							<Input type="reset" value={t("form_reset")} />
						</div>
					</div>
				</Form>
			</div>
		</section>
	);
};
