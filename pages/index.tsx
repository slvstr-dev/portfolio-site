import projects from "../data/projects.json";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Languages from "../components/Languages";
import Projects from "../components/Projects";
import Repositories from "../components/Repositories";
import Tools from "../components/Tools";
import User from "../components/User";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
	const userResponse = await fetch("https://api.github.com/users/slvstr-dev");
	const user = await userResponse.json();

	const repositoriesResponse = await fetch(
		"https://api.github.com/users/slvstr-dev/repos"
	);
	const repositories = await repositoriesResponse.json();

	return {
		props: {
			user,
			repositories,
		},
	};
};

const Home = ({ user, repositories }: any) => (
	<>
		<Banner title="slvstr.dev" />
		<User user={user} />
		<Projects projects={projects} />
		<Repositories repositories={repositories} />
		<Languages />
		<Tools />
		<Contact />
	</>
);

export default Home;
