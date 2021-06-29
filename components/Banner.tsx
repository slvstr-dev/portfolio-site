import styles from "../styles/components/Banner.module.scss";

export const Banner: React.FC<{ title: string }> = ({ title }) => (
	<section>
		<h1>{title}</h1>
	</section>
);
