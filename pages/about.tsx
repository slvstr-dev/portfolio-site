import { Hero } from "../components/Hero";
import { PageMeta } from "../components/PageMeta";
import styles from "../styles/pages/About.module.scss";

const About: React.FC = () => (
	<>
		<PageMeta title="About" />
		<Hero title="About" />
	</>
);

export default About;
