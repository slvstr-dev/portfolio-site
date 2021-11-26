import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Brightness from "../../public/svg/brightness.svg";
import styles from "../../styles/components/elements/Options.module.scss";

interface Options {
	classNames?: string;
}

export const Options: React.FC<Options> = ({ classNames }) => {
	const [darkMode, setDarkMode] = useState(
		typeof window !== "undefined" &&
			(window.matchMedia("(prefers-color-scheme: dark)").matches ||
				localStorage.theme === "dark")
	);
	const [mounted, setMounted] = useState(false);
	const router = useRouter();
	const { t } = useTranslation("common");

	useEffect(() => {
		const root = window.document.documentElement;
		const previousMode = darkMode ? "light" : "dark";
		const currentMode = darkMode ? "dark" : "light";

		setMounted(true);
		root.classList.remove(previousMode);
		root.classList.add(currentMode);

		if (typeof window !== "undefined") {
			localStorage.setItem("theme", currentMode);
		}
	}, [darkMode]);

	return (
		<ul className={`${styles.options} ${classNames}`}>
			{router.locales !== undefined &&
				router.locales.length > 1 &&
				router.locales.map((locale, index) => (
					<li
						className={
							locale === router.locale
								? styles.options__active
								: styles.options__inactive
						}
						key={index}
						title={t("header_locale_button")}
					>
						<Link href={router.pathname} locale={locale}>
							{locale}
						</Link>
					</li>
				))}

			{mounted && (
				<li
					className={
						darkMode
							? styles.options__active
							: styles.options__inactive
					}
					onClick={() => setDarkMode(!darkMode)}
					title={t("header_darkmode_toggle")}
				>
					<Brightness />
				</li>
			)}
		</ul>
	);
};
