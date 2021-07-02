import Link from "next/link";
import { linkedInUrl, gitHubUrl } from "../../../config";
import { IconButton } from "../../elements/IconButton";
import { Logo } from "../../elements/Logo";
import { Menu } from "../../content/Menu";
import { Navbar } from "../Navbar";
import LinkedIn from "../../../public/svg/linkedin.svg";
import GitHub from "../../../public/svg/github.svg";
import styles from "./index.module.scss";

export const Header: React.FC = () => (
	<header className={styles.header}>
		<div className={styles.header__container}>
			<div className={styles.header__socials}>
				<IconButton url={linkedInUrl}>
					<LinkedIn />
				</IconButton>

				<IconButton url={gitHubUrl}>
					<GitHub />
				</IconButton>
			</div>

			<Link href="/" passHref>
				<a>
					<Logo />
				</a>
			</Link>

			<Menu />

			<Navbar />
		</div>
	</header>
);
