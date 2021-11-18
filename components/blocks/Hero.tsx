import Image from "next/image";
import { Container } from "../elements/Container";
import hero from "../../public/images/hero-vs-code.jpg";
import styles from "../../styles/components/blocks/Hero.module.scss";

export const Hero: React.FC<{ h1: string }> = ({ h1 }) => (
	<section className={styles.hero}>
		<Container classNames={styles.hero__container}>
			<div className={styles.hero__imageWrapper}>
				<Image
					className={styles.hero__image}
					src={hero}
					alt=""
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>

			<h1 className={styles.hero__heading}>{h1}</h1>
		</Container>
	</section>
);
