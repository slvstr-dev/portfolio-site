import { Repository } from "../Repository";
import styles from "./index.module.scss";

interface Repositories {
	repositories: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	}[];
}

export const Repositories: React.FC<Repositories> = ({ repositories }) => (
	<section>
		{repositories.map((value) => {
			return <Repository key={value.id} repository={value} />;
		})}
	</section>
);
