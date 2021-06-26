import styles from "../styles/Repositories.module.scss";

export const Repository: React.FC<Props> = ({ repository }: any) => (
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

type Props = {
	repository: Object;
};
