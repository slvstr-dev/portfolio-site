import styles from "../styles/components/Hero.module.scss";

export const Hero: React.FC<{ title: string }> = ({ title }) => (
	<section>
		<h1>{title}</h1>
	</section>
);
