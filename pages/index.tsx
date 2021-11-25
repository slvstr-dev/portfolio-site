import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { Accomplisments } from "../components/blocks/Accomplisments";
import { Contact } from "../components/blocks/Contact";
import { Developer } from "../components/blocks/Developer";
import { Error } from "../components/blocks/Error";
import { Footer } from "../components/blocks/Footer";
import { Header } from "../components/blocks/Header";
import { Hero } from "../components/blocks/Hero";
import { Meta } from "../components/blocks/Meta";
import { Quote } from "../components/blocks/Quote";
import { Skills } from "../components/blocks/Skills";

interface Index {
	meta: { image_url: string };
	hero: { image_url: string };
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
		data: meta,
		status: metaStatus,
		error: metaError,
	} = await supabase.from("meta").select().limit(1).single();
	const {
		data: hero,
		status: heroStatus,
		error: heroError,
	} = await supabase.from("hero").select().limit(1).single();
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
		metaStatus !== 200 ||
		heroStatus !== 200 ||
		developerStatus !== 200 ||
		accomplismentsStatus !== 200 ||
		skillsStatus !== 200 ||
		metaError ||
		heroError ||
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
			meta,
			hero,
			developer,
			accomplisments,
			skills,
			locale,
		},
	};
};

const Index: React.FC<Index> = ({
	meta,
	hero,
	developer,
	accomplisments,
	skills,
	locale,
}) => (
	<>
		<Meta imageUrl={meta.image_url} />

		<Header />

		<main>
			{hero && developer && accomplisments && skills ? (
				<>
					<Hero imageUrl={hero.image_url} />

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

					<Skills skills={skills} />
				</>
			) : (
				<Error />
			)}

			<Contact />
		</main>

		<Footer />
	</>
);

export default Index;
