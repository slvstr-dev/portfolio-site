import { Meta } from "./Meta";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from "../styles/Layout.module.scss";

export const Layout: React.FC<Props> = ({ children }: any) => {
	return (
		<>
			<Meta title="slvstr.dev" description="" keywords="" />
			<Navbar />

			<main>{children}</main>

			<Footer />
		</>
	);
};

type Props = {
	children: React.ReactNode;
};
