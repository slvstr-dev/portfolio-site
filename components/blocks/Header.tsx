import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../elements/Container";
import { IconButton } from "../elements/IconButton";
import { Logo } from "../elements/Logo";
import Code from "../../public/svg/code.svg";
import LinkedIn from "../../public/svg/linkedin.svg";
import GitHub from "../../public/svg/github.svg";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/Header.module.scss";

const pages = ["developer", "accomplisments", "skills"];

export const Header: React.FC = () => {
	const router = useRouter();
	const { t } = useTranslation("index");

	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				{router.locales !== undefined && router.locales.length > 1 && (
					<ul className={styles.header__locales}>
						{router.locales.map((locale, index) => (
							<li
								className={
									locale === router.locale
										? styles.header__activeLocale
										: styles.header__inactiveLocale
								}
								key={index}
							>
								<Link href={router.basePath} locale={locale}>
									<a title={t("header_switch_locale")}>
										{locale}
									</a>
								</Link>
							</li>
						))}
					</ul>
				)}

				<div className={styles.header__socials}>
					<IconButton
						href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`}
						title={t("header_portfolio")}
					>
						<Code />
					</IconButton>

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

				<Link href="/">
					<a className={styles.header__logo}>
						<Logo />
					</a>
				</Link>

				<nav className={styles.navbar}>
					<ul>
						{pages.map((page, index) => (
							<li key={index}>
								<Link href={`#${page}`}>
									{t(`navbar_${page}`)}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</header>
	);
};
