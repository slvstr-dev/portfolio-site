import styles from "../../shared/styles/components/elements/Textarea.module.scss";

interface Textarea {
	id: string;
	name: string;
	placeholder: string;
	rows: number;
	cols: number;
}

export const Textarea: React.FC<Textarea> = ({
	id,
	name,
	placeholder,
	rows,
	cols,
}) => (
	<textarea
		id={id}
		name={name}
		placeholder={placeholder}
		rows={rows}
		cols={cols}
	/>
);
