import type { AppProps } from "next/app";
import { Header } from "../components/blocks/Header";
import { Footer } from "../components/blocks/Footer";
import "../styles/global/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Header />

		<Component {...pageProps} />

		<Footer />
	</>
);

export default App;
