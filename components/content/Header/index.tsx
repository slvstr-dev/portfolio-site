import Link from "next/link";
import { Icon } from "../../elements/Icon";
import { Button } from "../../elements/Button";
import { Navbar } from "../Navbar";
import styles from "./index.module.scss";

export const Header: React.FC = () => (
	<header className={styles.header}>
		<div className={styles.header__topbar}>
			<Button>
				<Icon />
			</Button>

			<Link href="/" passHref>
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
