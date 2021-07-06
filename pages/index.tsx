import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import styles from "../shared/styles/pages/Home.module.scss";

const Home: React.FC = () => (
	<>
		<Meta title="Home placeholder" />

		<main className={styles.home}>
			<Container classNames={styles.home__container}>
				<div className={styles.home__hero}>
					<h1 className={styles.home__title}>
						Eat, code, sleep, repeat
					</h1>
				</div>
			</Container>
		</main>
	</>
);

export default Home;
