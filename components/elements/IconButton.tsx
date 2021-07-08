import Link from "next/link";
import styles from "../../shared/styles/components/elements/IconButton.module.scss";

interface IconButton {
	href?: string;
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
	<>
		{href ? (
			<Link href={href} passHref>
				<a
					className={`${styles.button} ${classNames}`}
					title={title}
					target="_blank"
					rel="noreferrer noopener"
				>
					{children}
				</a>
			</Link>
		) : (
			<span className={`${styles.button} ${classNames}`}>{children}</span>
		)}
	</>
);
