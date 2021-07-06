import type { AppProps } from "next/app";
import { Header } from "../components/blocks/Header";
import { Footer } from "../components/blocks/Footer";
import "../shared/styles/global/globals.scss";

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
