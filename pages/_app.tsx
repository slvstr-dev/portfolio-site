import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Header } from "../components/blocks/Header";
import { Footer } from "../components/blocks/Footer";
import "../shared/styles/global/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Header />

		<AnimatePresence>
			<Component {...pageProps} />
		</AnimatePresence>

		<Footer />
	</>
);

export default App;
