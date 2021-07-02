import styles from "./index.module.scss";

export const Button: React.FC<{
	href: string;
	className?: string;
	children: React.ReactNode;
}> = ({ href, className, children }) => (
	<a className={`${styles.button} ${className}`} href={href}>
		{children}
	</a>
);
