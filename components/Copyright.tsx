import styles from "../styles/components/Copyright.module.scss";

export const Copyright: React.FC = () => (
	<div className={styles.copyright}>
		<div className={styles.copyright__container}>
			&copy; {new Date().getFullYear()} Created by slvstr.dev.
		</div>
	</div>
);
