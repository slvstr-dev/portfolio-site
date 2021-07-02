import { Hero } from "../components/content/Hero";
import { PageMeta } from "../components/misc/PageMeta";

const About: React.FC = () => (
	<>
		<PageMeta title="About" description="About description" />
		<Hero title="About" />
	</>
);

export default About;
