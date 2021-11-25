import useTranslation from "next-translate/useTranslation";
import { Container } from "../components/elements/Container";
import { Error } from "../components/blocks/Error";
import { Footer } from "../components/blocks/Footer";
import { Header } from "../components/blocks/Header";
import { Meta } from "../components/blocks/Meta";

const Custom404 = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Meta follow={false} />

			<Header />

			<main>
				<Container>
					<h1 className="pt-14 md:pt-16">{t("404_heading")}</h1>

					<Error message={t("404_message")} />
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default Custom404;
