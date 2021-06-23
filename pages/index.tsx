import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home = () => (
	<div className={styles.container}>
		<Head>
			<title>slvstr.dev</title>
		</Head>

		<main className={styles.main}>
			<h1 className={styles.title}>slvstr.dev</h1>
		</main>
	</div>
);

export default Home;
