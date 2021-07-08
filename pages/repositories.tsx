import { GetStaticProps } from "next";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Repository } from "../components/blocks/Repository";
import useTranslation from "next-translate/useTranslation";
import styles from "../shared/styles/pages/Repositories.module.scss";

interface Repositories {
	repositories: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	}[];
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(
		"https://api.github.com/users/slvstr-dev/repos"
	);
	const repositories = await response.json();

	return {
		props: {
			repositories,
		},
	};
};

const Repositories: React.FC<Repositories> = ({ repositories }) => {
	const { t } = useTranslation("repositories");

	return (
		<>
			<Meta
				title={t("meta_title")}
				description={t("meta_description")}
				keywords={t("meta_keywords")}
			/>

			<main className={styles.repositories}>
				<h1 className={styles.repositories__title}>{t("h1")}</h1>

				<section className={styles.repositories__section}>
					<Container classNames={styles.repositories__container}>
						{repositories.map((repository, index) => {
							return (
								<Repository
									key={repository.id}
									reverseRow={index % 2 === 0}
									repository={repository}
								/>
							);
						})}
					</Container>
				</section>
			</main>
		</>
	);
};

export default Repositories;
