import Image from "next/image";
import { Container } from "../elements/Container";
import { Button } from "../elements/Button";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/Bio.module.scss";

interface Bio {
	developer: {
		name: string;
		description_nl: string;
		description_en: string;
		about_quote_nl: string;
		about_quote_en: string;
		image_url: string;
	};
	locale: string;
}

export const Bio: React.FC<Bio> = ({ developer, locale }) => {
	const { t } = useTranslation("about");

	return (
		<section className={styles.bio}>
			<Container classNames={styles.bio__container}>
				<div className={styles.bio__imageWrapper}>
					<Image
						className={styles.bio__image}
						src={developer.image_url}
						alt={developer.name}
						width={465}
						height={465}
					/>
				</div>

				<div className={styles.bio__info}>
					<h2 className={styles.bio__title}>{developer.name}</h2>

					<p className={styles.bio__text}>
						{locale === "nl"
							? developer.description_nl
							: developer.description_en}
					</p>

					<div className={styles.bio__buttons}>
						<Button
							href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
							text={t("profile_github_cta")}
							isExternal
						/>

						<Button
							href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
							text={t("profile_linkedin_cta")}
							isExternal
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
