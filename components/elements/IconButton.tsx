import Link from "next/link";
import styles from "../../shared/styles/components/IconButton.module.scss";

interface IconButton {
	href?: string;
	classNames?: string;
	children: React.ReactNode;
}

export const IconButton: React.FC<IconButton> = ({
	href,
	classNames,
	children,
}) => (
	<>
		{href ? (
			<Link href={href} passHref>
				<a
					className={`${styles.button} ${classNames}`}
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
