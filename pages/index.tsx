import projects from "../shared/data/projects.json";
import { GetStaticProps } from "next";
import { PageMeta } from "../components/PageMeta";
import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { About } from "../components/About";
import { ProjectsList } from "../components/ProjectsList";

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
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://api.github.com/users/slvstr-dev");
	const user = await response.json();

	return {
		props: {
			user,
			projects,
		},
	};
};

const Home: React.FC<Home> = ({ user, projects }) => (
	<>
		<PageMeta title="Home placeholder" />
		<Hero title="Eat, code, sleep, repeat" />
		<Quote text="Als ‘self-taught’ frontend developer vind ik het belangrijk om met een moderne stack te werken binnen een creatieve en open organisatie, waarin persoonlijke ontwikkeling actief wordt gestimuleerd." />
		<About user={user} />
		<ProjectsList projects={projects} />
	</>
);

export default Home;
