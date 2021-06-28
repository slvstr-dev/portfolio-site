import projects from "../../../public/data/projects.json";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { Banner } from "../../../components/Banner";
import { Meta } from "../../../components/Meta";
import styles from "../../styles/pages/Projects.module.scss";

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params as ParsedUrlQuery & { id: string };
	const project = projects[parseInt(id)];

	return {
		props: {
			project,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const ids = projects.map((project: ProjectItem) => project.id);
	const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

const Project: React.FC<Project> = ({ project }) => (
	<>
		<Meta title={project.name} description="" keywords="" />

		<Banner title={project.name} />

		<a href={project.url}>{project.name}</a>
	</>
);

export default Project;
