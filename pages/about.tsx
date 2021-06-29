import { Banner } from "../components/Banner";
import { PageMeta } from "../components/PageMeta";
import styles from "../styles/pages/About.module.scss";

const About: React.FC = () => (
	<>
		<PageMeta title="About" />
		<Banner title="About" />
	</>
);

export default About;
