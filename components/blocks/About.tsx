import Image from "next/image";
import { Button } from "../elements/Button";
import { Container } from "../elements/Container";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/blocks/About.module.scss";

interface About {
	developer: {
		name: string;
		description_nl: string;
		description_en: string;
		quote_nl: string;
		quote_en: string;
		image_url: string;
	};
	locale: string;
}

export const About: React.FC<About> = ({ developer, locale }) => {
	const { t } = useTranslation("index");

	return (
		<section id="developer" className={styles.about}>
			<Container classNames={styles.about__container}>
				<div className={styles.about__imageWrapper}>
					<Image
						className={styles.about__image}
						src={developer.image_url}
						alt={developer.name}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<div className={styles.about__info}>
					<h2 className={styles.about__heading}>{developer.name}</h2>

					<p className={styles.about__text}>
						{locale === "nl"
							? developer.description_nl
							: developer.description_en}
					</p>

					<div className={styles.about__buttons}>
						<Button
							href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
							text={t("about_github_cta")}
							isExternal
						/>

						<Button
							href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
							text={t("about_linkedin_cta")}
							isExternal
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
