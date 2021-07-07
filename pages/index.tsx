import { Meta } from "../components/blocks/Meta";
import { Hero } from "../components/blocks/Hero";
import { Quote } from "../components/blocks/Quote";
import styles from "../shared/styles/pages/Home.module.scss";

const Home: React.FC = () => (
	<>
		<Meta title="Home placeholder" />

		<main className={styles.home}>
			<Hero h1="Eat, code, sleep, repeat" />

			<Quote quote="Als ‘self-taught’ frontend developer vind ik het belangrijk om met een moderne stack te werken binnen een creatieve en open organisatie, waarin persoonlijke ontwikkeling actief wordt gestimuleerd." />
		</main>
	</>
);

export default Home;
