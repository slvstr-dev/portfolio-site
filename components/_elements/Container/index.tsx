import React from "react";
import styles from "./index.module.scss";

export const Container: React.FC<{
	className?: string;
	children: React.ReactNode;
}> = ({ className, children }) => (
	<div className={`${styles.container} ${className ? className : ""}`}>
		{children}
	</div>
);
