import styles from "./index.module.scss";

export const Input: React.FC<{
	type: string;
	placeholder?: string;
	value?: string;
}> = ({ type, placeholder, value }) => (
	<input type={type} placeholder={placeholder} value={value} />
);
