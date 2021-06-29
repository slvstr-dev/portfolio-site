import projects from "../data/projects.json";
import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Languages } from "../components/Languages";
import { ProjectsList } from "../components/ProjectsList";
import { RepositoriesList } from "../components/RepositoriesList";
import { Tools } from "../components/Tools";
import { User } from "../components/User";
import styles from "../styles/pages/Home.module.scss";

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
		<Banner title="slvstr.dev" />
		<User user={user} />
		<ProjectsList projects={projects} />
		<RepositoriesList repositories={repositories} />
		<Languages />
		<Tools />
		<Contact />
	</>
);

export default Home;
