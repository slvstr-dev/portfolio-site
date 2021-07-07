import styles from "../../shared/styles/components/elements/Logo.module.scss";

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
	<div className={`${styles.logo} ${className}`}>
		<span className={styles.logo__title}>Slvstr</span>
		<span className={styles.logo__subtitle}>Frontend developer</span>
	</div>
);
