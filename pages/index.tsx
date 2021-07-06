import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import styles from "../shared/styles/pages/Home.module.scss";

const Home: React.FC = () => (
	<>
		<Meta title="Home placeholder" />

		<div className={styles.hero}>
			<Container classNames={styles.hero__container}>
				<h1 className={styles.hero__title}>Eat, code, sleep, repeat</h1>
			</Container>
		</div>
	</>
);

export default Home;
