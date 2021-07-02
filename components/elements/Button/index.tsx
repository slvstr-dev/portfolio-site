import styles from "./index.module.scss";

export const Button: React.FC<{
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
	children: React.ReactNode;
}> = ({ handleClick, className, children }) => (
	<button
		onClick={handleClick}
		className={`${styles.button} ${className}`}
		type="button"
	>
		{children}
	</button>
);
