import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Button } from "../elements/Button";
import { Container } from "../elements/Container";
import styles from "../../styles/components/blocks/About.module.scss";

interface About {
	about: {
		name: string;
		description_nl: string;
		description_en: string;
		quote_nl: string;
		quote_en: string;
	};
	locale: string;
}

export const About: React.FC<About> = ({ about, locale }) => {
	const { t } = useTranslation("index");

	return (
		<section id="about" className={styles.about}>
			<Container classNames={styles.about__container}>
				<div className={styles.about__imageWrapper}>
					<Image
						className={styles.about__image}
						src="/images/avatar.jpg"
						alt={about.name}
						priority={true}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<div className={styles.about__info}>
					<h2 className={styles.about__heading}>{about.name}</h2>

					<p className={styles.about__text}>
						{locale === "nl"
							? about.description_nl
							: about.description_en}
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
