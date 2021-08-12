import Link from "next/link";
import { gitHubUrl, linkedInUrl, portfolioUrl } from "../../config";
import { Container } from "../elements/Container";
import { IconButton } from "../elements/IconButton";
import { Logo } from "../elements/Logo";
import { Navbar } from "./Navbar";
import Code from "../../public/svg/code.svg";
import LinkedIn from "../../public/svg/linkedin.svg";
import GitHub from "../../public/svg/github.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Header.module.scss";

export const Header: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				<IconButton
					classNames={styles.header__cta}
					href={portfolioUrl}
					title={t("header_portfolio")}
				>
					<Code />
				</IconButton>

				<div className={styles.header__socials}>
					<IconButton href={gitHubUrl} title={t("header_github")}>
						<GitHub />
					</IconButton>

					<IconButton href={linkedInUrl} title={t("header_linkedin")}>
						<LinkedIn />
					</IconButton>
				</div>

				<Link href="/" passHref>
					<a className={styles.header__logo}>
						<Logo />
					</a>
				</Link>

				<Navbar />
			</Container>
		</header>
	);
};
