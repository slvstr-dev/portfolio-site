import { GetStaticProps } from "next";
import { supabase } from "../supabaseClient";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Bio } from "../components/blocks/Bio";
import { Text } from "../components/blocks/Text";
import { Skill } from "../components/blocks/Skill";
import { Error } from "../components/blocks/Error";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/pages/About.module.scss";

interface About {
	developer: {
		name: string;
		description_nl: string;
		description_en: string;
		about_quote_nl: string;
		about_quote_en: string;
		image_url: string;
	};
	skills: [
		{
			id: number;
			name: string;
			description_nl: string;
			description_en: string;
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
		data: skills,
		status: skillsStatus,
		error: skillserror,
	} = await supabase.from("skills").select().order("id", { ascending: true });

	if (
		developerStatus !== 200 ||
		skillsStatus !== 200 ||
		developerError ||
		skillserror
	) {
		return { props: {} };
	}

	return {
		props: {
			developer,
			skills,
			locale,
		},
	};
};

const About: React.FC<About> = ({ developer, skills, locale }) => {
	const { t } = useTranslation("about");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
			/>

			<main className={styles.about}>
				<Container classNames={styles.about__container}>
					<h1 className={styles.about__title}>{t("h1")}</h1>
				</Container>

				{developer && skills ? (
					<>
						<Bio developer={developer} locale={locale} />

						<Container>
							<Text
								content={
									locale === "nl"
										? developer.about_quote_nl
										: developer.about_quote_en
								}
							/>
						</Container>

						<Container classNames={styles.about__container}>
							<section className={styles.about__section}>
								{skills.map((skill) => {
									return (
										<Skill
											key={skill.id}
											skill={skill}
											locale={locale}
										/>
									);
								})}
							</section>
						</Container>
					</>
				) : (
					<Container classNames={styles.about__container}>
						<Error message={t("error_message")} />
					</Container>
				)}
			</main>
		</>
	);
};

export default About;
