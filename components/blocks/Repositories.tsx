import { Container } from "../elements/Container";
import { Repository } from "../elements/Repository";
import styles from "../../shared/styles/components/blocks/Repositories.module.scss";

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
	<section className={styles.repositories}>
		<Container classNames={styles.repositories__container}>
			<h2 className={styles.repositories__title}>Repositories</h2>

			{repositories.map((repository, index) => {
				return (
					<Repository
						key={repository.id}
						reverseRow={index % 2 === 0}
						repository={repository}
					/>
				);
			})}
		</Container>
	</section>
);
