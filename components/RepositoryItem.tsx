import styles from "../styles/components/RepositoryItem.module.scss";

interface RepositoryItem {
	repository: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	};
}

export const RepositoryItem: React.FC<RepositoryItem> = ({ repository }) => (
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
