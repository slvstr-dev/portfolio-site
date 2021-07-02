import styles from "./index.module.scss";

interface Repository {
	repository: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	};
}

export const Repository: React.FC<Repository> = ({ repository }) => (
	<div>
		<h2>{repository.name}</h2>

		<p>{repository.description}</p>

		<ul>
			<li>Created: {repository.created_at}</li>
			<li>Last updated: {repository.updated_at}</li>
			<li>GitHub: {repository.html_url}</li>
		</ul>
	</div>
);
