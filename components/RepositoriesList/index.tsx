import { Repository } from "../Repository";

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
			return <Repository key={value.id} repository={value} />;
		})}
	</section>
);
