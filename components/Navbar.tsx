import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export const Navbar: React.FC = () => (
	<nav>
		<ul className={styles.list}>
			<li>
				<Link href="/">Home</Link>
			</li>

			<li>
				<Link href="/about">About</Link>
			</li>
		</ul>
	</nav>
);
