import styles from "../../styles/components/elements/IconButton.module.scss";

interface IconToggle {
	classNames?: string;
	title: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	children: React.ReactNode;
}

export const IconToggle: React.FC<IconToggle> = ({
	classNames,
	title,
	onClick,
	children,
}) => (
	<span
		className={`${styles.button} ${classNames}`}
		title={title}
		onClick={onClick}
	>
		{children}
	</span>
);
