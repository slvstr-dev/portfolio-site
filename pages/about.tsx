import { PageMeta } from "../components/PageMeta";
import { Hero } from "../components/Hero";

const About: React.FC = () => (
	<>
		<PageMeta title="About" description="About description" />
		<Hero title="About" />
	</>
);

export default About;
