import Link from "next/link";
import { linkedInUrl, gitHubUrl } from "../../config";
import { Container } from "../_elements/Container";
import { IconButton } from "../_elements/IconButton";
import { Logo } from "../_elements/Logo";
import { Menu } from "../Menu";
import LinkedIn from "../../public/svg/linkedin.svg";
import GitHub from "../../public/svg/github.svg";
import styles from "./index.module.scss";

export const Header: React.FC = () => (
	<header className={styles.header}>
		<Container classNames={styles.header__container}>
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
		</Container>
	</header>
);
