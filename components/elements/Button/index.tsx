import styles from "./index.module.scss";

export const Button: React.FC<{
	className?: string;
	children: React.ReactNode;
}> = ({ className, children }) => (
	<button className={`${styles.button} ${className}`}>{children}</button>
);
