import Banner from "../../components/Banner";
import Meta from "../../components/Meta";
import styles from "../../styles/Project.module.scss";

const Project = ({ project }: any) => (
	<>
		<Meta title={project.title} />
		<Banner title="About" />

		<p>{project.description}</p>
	</>
);

export default Project;
