import type { AppProps } from "next/app";
import "../styles/main.scss";

const App = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);

export default App;
