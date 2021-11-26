import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Container } from "../elements/Container";
import styles from "../../styles/components/blocks/Hero.module.scss";

interface Hero {
	imageUrl: string;
}

export const Hero: React.FC<Hero> = ({ imageUrl }) => {
	const { t } = useTranslation("index");

	return (
		<section className={styles.hero}>
			<Container classNames={styles.hero__container}>
				<div className={styles.hero__imageWrapper}>
					<Image
						className={styles.hero__image}
						src={imageUrl}
						alt=""
						priority={true}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<h1 className={styles.hero__heading}>{t("hero_heading")}</h1>
			</Container>
		</section>
	);
};
