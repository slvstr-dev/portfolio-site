import { RepositoryItem } from "./RepositoryItem";
import styles from "../styles/components/Repositories.module.scss";

interface RepositoriesList {
	repositories: {
		id: number;
		name: string;
		description: string;
		created_at: string;
		updated_at: string;
		html_url: string;
	}[];
}

export const RepositoriesList: React.FC<RepositoriesList> = ({
	repositories,
}) => (
	<section>
		{repositories.map((value) => {
			return <RepositoryItem key={value.id} repository={value} />;
		})}
	</section>
);
