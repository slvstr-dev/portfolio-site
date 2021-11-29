import Link from "next/link";
import styles from "../../styles/components/elements/Logo.module.scss";

interface Logo {
	classNames?: string;
}

export const Logo: React.FC<Logo> = ({ classNames }) => (
	<Link href="/">
		<a className={`${styles.logo} ${classNames}`}>
			<span className={styles.logo__heading}>Slvstr</span>

			<span className={styles.logo__subheading}>Frontend developer</span>
		</a>
	</Link>
);
