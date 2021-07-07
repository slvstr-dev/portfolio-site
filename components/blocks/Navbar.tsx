import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import styles from "../../shared/styles/components/blocks/Navbar.module.scss";

export const Navbar: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">{t("home")}</Link>
				</li>

				<li>
					<Link href="/about">{t("about")}</Link>
				</li>

				<li>
					<Link href="/portfolio">{t("portfolio")}</Link>
				</li>

				<li>
					<Link href="/contact">{t("contact")}</Link>
				</li>
			</ul>
		</nav>
	);
};
