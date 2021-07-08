import Link from "next/link";
import { Container } from "../elements/Container";
import { Logo } from "../elements/Logo";
import { Form } from "../elements/Form";
import { Label } from "../elements/Label";
import { Input } from "../elements/Input";
import { Textarea } from "../elements/Textarea";
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

					<Form
						action={`mailto:hello@slvstr.dev?subject=${t(
							"form_subject"
						)}`}
						method="post"
					>
						<Label htmlFor="name" title={t("form_name_label")} />

						<Input
							type="text"
							name={t("form_name_label")}
							id="name"
							placeholder={t("form_name_placeholder")}
						/>

						<Label htmlFor="email" title={t("form_email_label")} />

						<Input
							type="email"
							name={t("form_email_label")}
							id="email"
							placeholder={t("form_email_placeholder")}
						/>

						<Label
							htmlFor="comment"
							title={t("form_comment_label")}
						/>

						<Textarea
							id="comment"
							name={t("form_comment_label")}
							rows={5}
							cols={33}
							placeholder={t("form_comment_placeholder")}
						/>
					</Form>
				</div>
			</Container>
		</section>
	);
};
