import { Meta } from "./Meta";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from "../styles/components/Layout.module.scss";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<>
			<Meta title="slvstr.dev" description="" keywords="" />
			<Navbar />

			<main>{children}</main>

			<Footer />
		</>
	);
};
