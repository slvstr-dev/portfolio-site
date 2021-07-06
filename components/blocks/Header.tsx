import Link from "next/link";
import { linkedInUrl, gitHubUrl } from "../../config";
import { Container } from "../elements/Container";
import { IconButton } from "../elements/IconButton";
import { Logo } from "../elements/Logo";
import { Navbar } from "./Navbar";
import LinkedIn from "../../public/svg/linkedin.svg";
import GitHub from "../../public/svg/github.svg";
import styles from "../../shared/styles/components/Header.module.scss";

export const Header: React.FC = () => (
	<header className={styles.header}>
		<Container classNames={styles.header__container}>
			<Link href="/" passHref>
				<a>
					<Logo />
				</a>
			</Link>

			<Navbar />

			<div className={styles.header__socials}>
				<IconButton href={linkedInUrl}>
					<LinkedIn />
				</IconButton>

				<IconButton href={gitHubUrl}>
					<GitHub />
				</IconButton>
			</div>
		</Container>
	</header>
);
