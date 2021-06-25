import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }: any) => {
	return (
		<>
			<Meta />
			<Navbar />

			<main>{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
