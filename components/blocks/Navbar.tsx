import Link from "next/link";
import styles from "../../shared/styles/components/blocks/Navbar.module.scss";

export const Navbar: React.FC = () => (
	<nav className={styles.navbar}>
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>

			<li>
				<Link href="/about">About</Link>
			</li>

			<li>
				<Link href="/portfolio">Portfolio</Link>
			</li>

			<li>
				<Link href="/contact">Contact</Link>
			</li>
		</ul>
	</nav>
);
