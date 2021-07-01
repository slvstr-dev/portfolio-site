import { PageMeta } from "./PageMeta";
import { Header } from "./Header";
import { Footer } from "./Footer";

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
			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
};
