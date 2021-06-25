import Repository from "./Repository";
import styles from "../styles/Repositories.module.scss";

const Repositories = ({ repositories }: any) => (
	<section>
		{repositories.map((repository: any) => {
			return <Repository key={repository.id} repository={repository} />;
		})}
	</section>
);

export default Repositories;
