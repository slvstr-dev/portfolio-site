import Link from "next/link";
import { linkedInUrl, gitHubUrl } from "../../config";
import { Container } from "../elements/Container";
import { IconButton } from "../elements/IconButton";
import { Logo } from "../elements/Logo";
import { Navbar } from "./Navbar";
import LinkedIn from "../../public/svg/linkedin.svg";
import GitHub from "../../public/svg/github.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Header.module.scss";

export const Header: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				<div className={styles.header__socials}>
					<IconButton href={gitHubUrl} title={t("header_github")}>
						<GitHub />
					</IconButton>

					<IconButton href={linkedInUrl} title={t("header_linkedin")}>
						<LinkedIn />
					</IconButton>
				</div>

				<Link href="/" passHref>
					<a>
						<Logo />
					</a>
				</Link>

				<Navbar />
			</Container>
		</header>
	);
};
