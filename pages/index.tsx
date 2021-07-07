import { Meta } from "../components/blocks/Meta";
import { Hero } from "../components/blocks/Hero";
import styles from "../shared/styles/pages/Home.module.scss";

const Home: React.FC = () => (
	<>
		<Meta title="Home placeholder" />

		<main className={styles.home}>
			<Hero title="Eat, code, sleep, repeat" />
		</main>
	</>
);

export default Home;
