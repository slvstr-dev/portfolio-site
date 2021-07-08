import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styles from "../../shared/styles/components/blocks/Navbar.module.scss";

export const Navbar: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">{t("navbar_home")}</Link>
				</li>

				<li>
					<Link href="/about">{t("navbar_about")}</Link>
				</li>

				<li>
					<Link href="/portfolio">{t("navbar_portfolio")}</Link>
				</li>

				<li>
					<Link href="/contact">{t("navbar_contact")}</Link>
				</li>
			</ul>
		</nav>
	);
};
