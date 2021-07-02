import styles from "./index.module.scss";

export const Hero: React.FC<{ title: string }> = ({ title }) => (
	<section className={styles.hero}>
		<div className={styles.hero__container}>
			<h1 className={styles.hero__title}>{title}</h1>
		</div>
	</section>
);
