import styles from "../../shared/styles/components/elements/Button.module.scss";

interface Button {
	href: string;
	classNames?: string;
	children: React.ReactNode;
}

export const Button: React.FC<Button> = ({ href, classNames, children }) => (
	<a className={`${styles.button} ${classNames}`} href={href}>
		{children}
	</a>
);
