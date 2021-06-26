import { Repository } from "./Repository";
import styles from "../styles/Repositories.module.scss";

export const Repositories: React.FC<Props> = ({ repositories }: any) => (
	<section>
		{repositories.map((repository: any) => {
			return <Repository key={repository.id} repository={repository} />;
		})}
	</section>
);

type Props = {
	repositories: Object[];
};
