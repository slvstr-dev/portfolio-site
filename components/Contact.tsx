import styles from "../styles/components/Contact.module.scss";

export const Contact: React.FC = () => (
	<section className={styles.contact}>
		<div className={styles.contact__container}>
			<div className={styles.contact__logo}>
				SLV
				<br />
				STR
			</div>

			<div className={styles.contact__postcard}>
				<h4 className={styles.contact__title}>Contact opnemen</h4>

				<form className={styles.contact__form}>
					<input
						className={styles.contact__input}
						type="text"
						placeholder="Jouw emailadres"
					/>

					<button className={styles.contact__button} type="submit">
						&gt;
					</button>
				</form>
			</div>
		</div>
	</section>
);
