import projects from "../shared/data/projects.json";
import { GetStaticProps } from "next";
import { PageMeta } from "../components/PageMeta";
import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { About } from "../components/About";
import { ProjectsList } from "../components/ProjectsList";
import { RepositoriesList } from "../components/RepositoriesList";

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
		<Hero title="Eat, code, sleep, repeat" />
		<Quote text="Als ‘self-taught’ frontend developer vind ik het belangrijk om met een moderne stack te werken binnen een creatieve en open organisatie, waarin persoonlijke ontwikkeling actief wordt gestimuleerd." />
		<About user={user} />
		<ProjectsList projects={projects} />
		{/* <RepositoriesList repositories={repositories} /> */}
	</>
);

export default Home;
