import Link from "next/link";
import styles from "./index.module.scss";

export const IconButton: React.FC<{
	url?: string;
	className?: string;
	children: React.ReactNode;
}> = ({ url, className, children }) => (
	<>
		{url ? (
			<Link href={url} passHref>
				<a className={`${styles.button} ${className}`} target="_blank">
					{children}
				</a>
			</Link>
		) : (
			<span className={`${styles.button} ${className}`}>{children}</span>
		)}
	</>
);
