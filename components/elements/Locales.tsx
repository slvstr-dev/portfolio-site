import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/elements/Locales.module.scss";

interface Locales {
	classNames?: string;
}

export const Locales: React.FC<Locales> = ({ classNames }) => {
	const router = useRouter();
	const { t } = useTranslation("common");

	return (
		<>
			{router.locales !== undefined && router.locales.length > 1 && (
				<ul className={`${styles.locales} ${classNames}`}>
					{router.locales.map((locale, index) => (
						<li
							className={
								locale === router.locale
									? styles.locales__active
									: styles.locales__inactive
							}
							key={index}
							title={t("header_switch_locale")}
						>
							<Link href={router.pathname} locale={locale}>
								{locale}
							</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
};
