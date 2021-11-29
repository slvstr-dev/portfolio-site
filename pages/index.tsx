import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { Experience } from "../components/blocks/Experience";
import { Contact } from "../components/blocks/Contact";
import { About } from "../components/blocks/About";
import { Error } from "../components/blocks/Error";
import { Footer } from "../components/blocks/Footer";
import { Header } from "../components/blocks/Header";
import { Hero } from "../components/blocks/Hero";
import { Meta } from "../components/blocks/Meta";
import { Quote } from "../components/blocks/Quote";
import { Skills } from "../components/blocks/Skills";

interface Index {
	about: {
		name: string;
		description_nl: string;
		description_en: string;
		quote_nl: string;
		quote_en: string;
	};
	experience: [
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
		data: about,
		status: aboutStatus,
		error: aboutError,
	} = await supabase.from("about").select().limit(1).single();
	const {
		data: experience,
		status: experienceStatus,
		error: experienceError,
	} = await supabase
		.from("experience")
		.select()
		.order("id", { ascending: false });
	const {
		data: skills,
		status: skillsStatus,
		error: skillsError,
	} = await supabase.from("skills").select().order("id", { ascending: true });

	if (
		aboutStatus !== 200 ||
		experienceStatus !== 200 ||
		skillsStatus !== 200 ||
		aboutError ||
		experienceError ||
		skillsError
	) {
		return {
			props: {},
		};
	}

	return {
		props: {
			about,
			experience,
			skills,
			locale,
		},
	};
};

const Index: React.FC<Index> = ({ about, experience, skills, locale }) => (
	<>
		<Meta />

		<Header />

		<main>
			{about && experience && skills ? (
				<>
					<Hero />

					<Quote
						quote={
							locale === "nl" ? about.quote_nl : about.quote_en
						}
					/>

					<About about={about} locale={locale} />

					<Experience experience={experience} locale={locale} />

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
