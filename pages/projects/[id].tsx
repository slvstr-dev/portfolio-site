import { Banner } from "../../components/Banner";
import { Meta } from "../../components/Meta";
import styles from "../../styles/Project.module.scss";

const Project: React.FC<Props> = ({ project }) => (
	<>
		<Meta title={project.title} description="" keywords="" />
		<Banner title="About" />

		<p>{project.description}</p>
	</>
);

type Props = {
	project: any;
};

export default Project;
