import Link from "next/link";
import { Container } from "../elements/Container";
import { IconButton } from "../elements/IconButton";
import { Logo } from "../elements/Logo";
import { Navbar } from "./Navbar";
import Code from "../../public/svg/code.svg";
import LinkedIn from "../../public/svg/linkedin.svg";
import GitHub from "../../public/svg/github.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/Header.module.scss";

export const Header: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				<IconButton
					classNames={styles.header__cta}
					href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`}
					title={t("header_portfolio")}
				>
					<Code />
				</IconButton>

				<div className={styles.header__socials}>
					<IconButton
						href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
						title={t("header_github")}
					>
						<GitHub />
					</IconButton>

					<IconButton
						href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
						title={t("header_linkedin")}
					>
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
