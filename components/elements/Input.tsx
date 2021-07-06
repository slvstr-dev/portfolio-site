import styles from "../../shared/styles/components/Input.module.scss";

interface Input {
	type: string;
	placeholder?: string;
}

export const Input: React.FC<Input> = ({ type, placeholder }) => (
	<input className={styles.input} type={type} placeholder={placeholder} />
);
