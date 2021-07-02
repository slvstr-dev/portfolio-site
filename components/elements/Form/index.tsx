import styles from "./index.module.scss";

export const Form: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => <form className={styles.form}>{children}</form>;
