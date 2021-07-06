import Link from "next/link";
import { IconButton } from "../_elements/IconButton";
import Hamburger from "../../public/svg/hamburger.svg";
import styles from "./index.module.scss";

export const Menu: React.FC = () => (
	<>
		<IconButton classNames={styles.menu__hamburger}>
			<Hamburger
				onClick={() => {
					console.log("Clicked hamburger");
				}}
			/>
		</IconButton>

		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>

				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	</>
);
