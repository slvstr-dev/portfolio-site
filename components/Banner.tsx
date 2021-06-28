import styles from "../styles/components/Banner.module.scss";

export const Banner: React.FC<Banner> = ({ title }) => (
	<section>
		<h1>{title}</h1>
	</section>
);
