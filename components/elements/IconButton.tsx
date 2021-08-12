import styles from "../../styles/components/elements/IconButton.module.scss";

interface IconButton {
	href: string;
	classNames?: string;
	title: string;
	children: React.ReactNode;
}

export const IconButton: React.FC<IconButton> = ({
	href,
	classNames,
	title,
	children,
}) => (
	<a
		className={`${styles.button} ${classNames}`}
		title={title}
		href={href}
		target="_blank"
		rel="noreferrer noopener"
	>
		{children}
	</a>
);
