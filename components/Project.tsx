import styles from "../styles/Projects.module.scss";

export const Project: React.FC<Props> = ({ project }: any) => (
	<div>
		<h2>{project.name}</h2>

		<p>{project.url}</p>
	</div>
);

type Props = {
	project: Object;
};
