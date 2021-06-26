import styles from "../styles/Banner.module.scss";

export const Banner: React.FC<Props> = ({ title }) => (
	<section>
		<h1>{title}</h1>
	</section>
);

type Props = {
	title: string;
};
