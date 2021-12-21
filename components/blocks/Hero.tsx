import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Container } from "../elements/Container";
import hero from "../../public/images/hero.png";
import styles from "../../styles/components/blocks/Hero.module.scss";

export const Hero: React.FC = () => {
	const { t } = useTranslation("index");

	return (
		<section className={styles.hero}>
			<Container classNames={styles.hero__container}>
				<div className={styles.hero__imageWrapper}>
					<Image
						className={styles.hero__image}
						src={hero}
						alt=""
						priority={true}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						placeholder="blur"
					/>
				</div>

				<h1 className={styles.hero__heading}>{t("hero_heading")}</h1>
			</Container>
		</section>
	);
};
