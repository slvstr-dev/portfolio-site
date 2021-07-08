import styles from "../../shared/styles/components/elements/Input.module.scss";

interface Input {
	type: string;
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
}

export const Input: React.FC<Input> = ({
	type,
	id,
	name,
	value,
	placeholder,
}) => (
	<input
		className={styles.input}
		id={id}
		type={type}
		name={name}
		value={value}
		placeholder={placeholder}
	/>
);
