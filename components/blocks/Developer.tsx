import Image from "next/image";
import { Container } from "../elements/Container";
import { Button } from "../elements/Button";
import useTranslation from "next-translate/useTranslation";

import styles from "../../styles/components/blocks/Developer.module.scss";

interface Developer {
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

export const Developer: React.FC<Developer> = ({ developer, locale }) => {
	const { t } = useTranslation("index");

	return (
		<section id="developer" className={styles.developer}>
			<Container classNames={styles.developer__container}>
				<div className={styles.developer__imageWrapper}>
					<Image
						className={styles.developer__image}
						src={developer.image_url}
						alt={developer.name}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<div className={styles.developer__info}>
					<h2 className={styles.developer__heading}>
						{developer.name}
					</h2>

					<p className={styles.developer__text}>
						{locale === "nl"
							? developer.description_nl
							: developer.description_en}
					</p>

					<div className={styles.developer__buttons}>
						<Button
							href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
							text={t("developer_github_cta")}
							isExternal
						/>

						<Button
							href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
							text={t("developer_linkedin_cta")}
							isExternal
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
