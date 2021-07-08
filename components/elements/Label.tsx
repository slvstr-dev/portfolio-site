import styles from "../../shared/styles/components/elements/Label.module.scss";

interface Label {
	htmlFor: string;
	title: string;
}

export const Label: React.FC<Label> = ({ htmlFor, title }) => (
	<label htmlFor={htmlFor}>{title}</label>
);
