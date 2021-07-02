import projects from "../shared/data/projects.json";
import { GetStaticProps } from "next";
import { PageMeta } from "../components/misc/PageMeta";
import { Hero } from "../components/content/Hero";
import { Contact } from "../components/content/Contact";
import { Skills } from "../components/content/Skills";
import { Projects } from "../components/content/Projects";
import { Repositories } from "../components/content/Repositories";
import { User } from "../components/content/User";

interface Home {
	user: {
		avatar_url: string;
		name: string;
		bio: string;
		company: string;
		location: string;
		html_url: string;
	};
	projects: {
		id: number;
		name: string;
		url: string;
	}[];
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
	const userResponse = await fetch("https://api.github.com/users/slvstr-dev");
	const user = await userResponse.json();

	const repositoriesResponse = await fetch(
		"https://api.github.com/users/slvstr-dev/repos"
	);
	const repositories = await repositoriesResponse.json();

	return {
		props: {
			user,
			projects,
			repositories,
		},
	};
};

const Home: React.FC<Home> = ({ user, projects, repositories }) => (
	<>
		<PageMeta title="Home placeholder" />
		<Hero title="This is an adventure" />
		{/* <User user={user} />
		<Projects projects={projects} />
		<Repositories repositories={repositories} />
		<Skills />
		<Contact /> */}
	</>
);

export default Home;
