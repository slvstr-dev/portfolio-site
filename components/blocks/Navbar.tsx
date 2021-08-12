import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/Navbar.module.scss";

const pages = [
	{ title: "home", path: "/" },
	{ title: "about", path: "/about" },
	{ title: "projects", path: "/projects" },
	{ title: "contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
	const router = useRouter();
	const { t } = useTranslation("common");

	return (
		<nav className={styles.navbar}>
			<ul>
				{pages.map((page, index) => {
					return (
						<li
							className={
								router.pathname == page.path
									? styles.activeLink
									: styles.inactiveLink
							}
							key={index}
						>
							<Link href={page.path}>
								{t(`navbar_${page.title}`)}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
