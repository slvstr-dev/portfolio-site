import { PageMeta } from "./PageMeta";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from "../styles/components/Layout.module.scss";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<>
			<PageMeta
				title="slvstr.dev"
				description="Layout placeholder description"
				keywords="Layout, Placeholder, Keywords"
				featuredImage="Layout featuredImage"
			/>
			<Navbar />

			<main>{children}</main>

			<Footer />
		</>
	);
};
