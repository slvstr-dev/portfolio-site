import { Project } from "../Project";
import styles from "./index.module.scss";

type Projects = {
	projects: {
		id: number;
		name: string;
		url: string;
	}[];
};

export const Projects: React.FC<Projects> = ({ projects }) => (
	<section>
		{projects.map((value) => {
			return <Project key={value.id} project={value} />;
		})}
	</section>
);
