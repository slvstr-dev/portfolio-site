import type { AppProps } from "next/app";
import { Header } from "../components/content/Header";
import { Footer } from "../components/content/Footer";
import "../shared/styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Header />

		<main>
			<Component {...pageProps} />
		</main>

		<Footer />
	</>
);

export default App;
