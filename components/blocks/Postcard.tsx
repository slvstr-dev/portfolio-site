import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/Postcard.module.scss";

export const Postcard: React.FC = () => {
	const { t } = useTranslation("contact");

	const [submitNotification, setSubmitNotification] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const formData = {
			name,
			email,
			phone,
			message,
		};

		fetch("/api/contact", {
			method: "post",
			body: JSON.stringify(formData),
		}).then((response) => {
			response.status !== 200
				? setSubmitNotification(t("error_message"))
				: setSubmitNotification(t("form_submitted"));
		});
	};

	return (
		<section className={styles.postcard}>
			<div className={styles.postcard__content}>
				{submitNotification ? (
					<p className={styles.postcard__notification}>
						{submitNotification}
					</p>
				) : (
					<form
						className={styles.postcard__form}
						onSubmit={handleSubmit}
					>
						<div className={styles.postcard__message}>
							<textarea
								className={styles.postcard__textarea}
								name={t("form_message")}
								placeholder={t("form_message_placeholder")}
								onChange={(e) => setMessage(e.target.value)}
								required
							/>
						</div>

						<div className={styles.postcard__contact}>
							<span className={styles.postcard__stamp}>
								SLV
								<br />
								STR
							</span>

							<input
								className={styles.postcard__input}
								type="text"
								name={t("form_name")}
								placeholder={t("form_name_placeholder")}
								onChange={(e) => setName(e.target.value)}
								required
							/>

							<input
								className={styles.postcard__input}
								type="email"
								name={t("form_email")}
								placeholder={t("form_email_placeholder")}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>

							<input
								className={styles.postcard__input}
								type="tel"
								pattern="[0-9-]{10,11}"
								name={t("form_phone")}
								placeholder={t("form_phone_placeholder")}
								onChange={(e) => setPhone(e.target.value)}
							/>

							<div className={styles.postcard__buttons}>
								<button
									className={styles.postcard__input}
									type="submit"
								>
									{t("form_submit")}
								</button>

								<input
									className={styles.postcard__input}
									type="reset"
									value={t("form_reset")}
								/>
							</div>
						</div>
					</form>
				)}
			</div>
		</section>
	);
};
