import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { Header } from "../components/blocks/Header";
import { Footer } from "../components/blocks/Footer";
import { Meta } from "../components/blocks/Meta";
import { Hero } from "../components/blocks/Hero";
import { Quote } from "../components/blocks/Quote";
import { Skills } from "../components/blocks/Skills";
import { Accomplisments } from "../components/blocks/Accomplisments";
import { Contact } from "../components/blocks/Contact";
import { Developer } from "../components/blocks/Developer";
import { Error } from "../components/blocks/Error";
import useTranslation from "next-translate/useTranslation";

interface Index {
	developer: {
		name: string;
		description_nl: string;
		description_en: string;
		quote_nl: string;
		quote_en: string;
		image_url: string;
	};
	accomplisments: [
		{
			id: number;
			name_nl: string;
			name_en: string;
			description_nl: string;
			description_en: string;
			category: string;
			stack: string[];
			website_url: string;
			repository_url: string;
			image_url: string;
		}
	];
	skills: [
		{
			id: number;
			category: string;
			list: string[];
		}
	];
	locale: string;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const {
		data: developer,
		status: developerStatus,
		error: developerError,
	} = await supabase.from("developer").select().limit(1).single();

	const {
		data: accomplisments,
		status: accomplismentsStatus,
		error: accomplismentsError,
	} = await supabase
		.from("accomplisments")
		.select()
		.order("id", { ascending: false });

	const {
		data: skills,
		status: skillsStatus,
		error: skillsError,
	} = await supabase.from("skills").select().order("id", { ascending: true });

	if (
		developerStatus !== 200 ||
		accomplismentsStatus !== 200 ||
		skillsStatus !== 200 ||
		developerError ||
		accomplismentsError ||
		skillsError
	) {
		return {
			props: {},
		};
	}

	return {
		props: {
			developer,
			accomplisments,
			skills,
			locale,
		},
	};
};

const Index: React.FC<Index> = ({
	developer,
	accomplisments,
	skills,
	locale,
}) => {
	const { t } = useTranslation("index");

	return (
		<>
			<Meta />

			<Header />

			<main>
				<Hero h1={t("hero_heading")} />

				{developer && accomplisments && skills ? (
					<>
						<Quote
							quote={
								locale === "nl"
									? developer.quote_nl
									: developer.quote_en
							}
						/>

						<Developer developer={developer} locale={locale} />

						<Accomplisments
							accomplisments={accomplisments}
							locale={locale}
						/>

						<Skills skills={skills} locale={locale} />
					</>
				) : (
					<Error message={t("error_message")} />
				)}

				<Contact />
			</main>

			<Footer />
		</>
	);
};

export default Index;
