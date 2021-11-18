import { Meta } from "../components/blocks/Meta";
import { Header } from "../components/blocks/Header";
import { Footer } from "../components/blocks/Footer";
import { Container } from "../components/elements/Container";
import { Error } from "../components/blocks/Error";
import useTranslation from "next-translate/useTranslation";

const Custom500 = () => {
	const { t } = useTranslation("500");

	return (
		<>
			<Meta title={t("meta_heading")} follow={false} />

			<Header />

			<main>
				<Container>
					<h1>{t("h1")}</h1>

					<Error message={t("error_message")} />
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default Custom500;
