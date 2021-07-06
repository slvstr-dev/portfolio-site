import Link from "next/link";
import styles from "./index.module.scss";

interface IconButton {
	url?: string;
	classNames?: string;
	children: React.ReactNode;
}

export const IconButton: React.FC<IconButton> = ({
	url,
	classNames,
	children,
}) => (
	<>
		{url ? (
			<Link href={url} passHref>
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
