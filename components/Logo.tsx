import Link from "next/link";
import styles from "../styles/components/Logo.module.scss";

export const Logo: React.FC = () => (
	<Link href="/">
		<div className={styles.container}>
			<span className={styles.title}>Slvstr.dev</span>
			<span className={styles.subtitle}>
				Self-taught frontend developer
			</span>
		</div>
	</Link>
);
