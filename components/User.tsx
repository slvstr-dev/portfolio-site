import styles from "../styles/User.module.scss";

export const User: React.FC<Props> = ({ user }) => (
	<section>
		<img src={user.avatar_url} alt={user.name} />

		<h2>{user.name}</h2>

		<p>{user.bio}</p>

		<ul>
			<li>Company: {user.company}</li>
			<li>Location: {user.location}</li>
			<li>GitHub: {user.html_url}</li>
		</ul>
	</section>
);

type Props = {
	user: any;
};
