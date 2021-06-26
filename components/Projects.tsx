import { Project } from "./Project";
import styles from "../styles/Projects.module.scss";

export const Projects: React.FC<Props> = ({ projects }: any) => (
	<section>
		{projects.map((project: any) => {
			return <Project key={project.id} project={project} />;
		})}
	</section>
);

type Props = {
	projects: Object[];
};
