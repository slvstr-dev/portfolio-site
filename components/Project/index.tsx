import { Container } from "../_elements/Container";

interface Project {
	project: {
		id: number;
		name: string;
		url: string;
	};
}

export const Project: React.FC<Project> = ({ project }) => (
	<article>
		<Container>
			<h2>{project.name}</h2>

			<p>{project.url}</p>
		</Container>
	</article>
);
