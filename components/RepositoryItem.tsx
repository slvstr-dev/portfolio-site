import styles from "../styles/components/RepositoryItem.module.scss";

export const RepositoryItem: React.FC<Repository> = ({ repository }) => (
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
