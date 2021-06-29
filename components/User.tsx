import Image from "next/image";
import styles from "../styles/components/User.module.scss";

interface User {
	user: {
		avatar_url: string;
		name: string;
		bio: string;
		company: string;
		location: string;
		html_url: string;
	};
}

export const User: React.FC<User> = ({ user }) => (
	<section>
		<Image src={user.avatar_url} alt={user.name} width="500" height="500" />

		<h2>{user.name}</h2>

		<p>{user.bio}</p>

		<ul>
			<li>Company: {user.company}</li>
			<li>Location: {user.location}</li>
			<li>GitHub: {user.html_url}</li>
		</ul>
	</section>
);
