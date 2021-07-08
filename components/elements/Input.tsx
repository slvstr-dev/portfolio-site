import styles from "../../shared/styles/components/elements/Input.module.scss";

interface Input {
	type: string;
	name?: string;
	value?: string;
	placeholder?: string;
	required?: boolean;
}

export const Input: React.FC<Input> = ({
	type,
	name,
	value,
	placeholder,
	required = false,
}) => (
	<input
		className={styles.input}
		type={type}
		name={name}
		value={value}
		placeholder={placeholder}
		required={required}
	/>
);
