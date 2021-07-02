import Link from "next/link";
import LinkedIn from "../../../public/svg/linkedin.svg";
import Hamburger from "../../../public/svg/hamburger.svg";
import { Logo } from "../../elements/Logo";
import { Button } from "../../elements/Button";
import { Navbar } from "../Navbar";
import styles from "./index.module.scss";

export const Header: React.FC = () => (
	<header className={styles.header}>
		<div className={styles.header__container}>
			<Link href="https://www.linkedin.com/in/sylvesterhofstra/" passHref>
				<a target="_blank">
					<LinkedIn
						className={styles.header__linkedIn}
						height="30"
						width="30"
					/>
				</a>
			</Link>

			<Link href="/" passHref>
				<a>
					<Logo />
				</a>
			</Link>

			<Button
				className={styles.header__button}
				handleClick={() => {
					console.log("Hello World!");
				}}
			>
				<Hamburger
					className={styles.header__hamburger}
					height="30"
					width="30"
				/>
			</Button>

			<Navbar />
		</div>
	</header>
);
