import { RepositoryItem } from "./RepositoryItem";
import styles from "../styles/components/Repositories.module.scss";

export const RepositoriesList: React.FC<RepositoriesList> = ({
	repositories,
}) => (
	<section>
		{repositories.map((value: RepositoryItem) => {
			return <RepositoryItem key={value.id} repository={value} />;
		})}
	</section>
);
