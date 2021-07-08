import styles from "../../shared/styles/components/elements/Textarea.module.scss";

interface Textarea {
	name: string;
	placeholder: string;
	required?: boolean;
}

export const Textarea: React.FC<Textarea> = ({
	name,
	placeholder,
	required = false,
}) => (
	<textarea
		className={styles.textarea}
		name={name}
		placeholder={placeholder}
		required={required}
	/>
);
