import Link from "next/link";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { Navbar } from "./Navbar";
import styles from "../styles/components/Header.module.scss";

export const Header: React.FC = () => (
	<header className={styles.header}>
		<div className={styles.header__topbar}>
			<Button>
				<Icon />
			</Button>

			<Link href="/">
				<div className={styles.header__logo}>
					<span className={styles.header__title}>Slvstr.dev</span>
					<span className={styles.header__subtitle}>
						Frontend developer
					</span>
				</div>
			</Link>

			<Button>
				<Icon />
			</Button>
		</div>

		<Navbar />
	</header>
);
