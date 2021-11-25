import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/elements/Navbar.module.scss";

const pages = ["developer", "accomplisments", "skills"];

export const Navbar: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<nav>
			<ul className={styles.navbar__list}>
				{pages.map((page, index) => (
					<li className={styles.navbar__item} key={index}>
						<Link href={`/#${page}`}>{t(`navbar_${page}`)}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
