import styles from "../styles/Repositories.module.scss";

const Repository = ({ repository }: any) => (
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

export default Repository;
