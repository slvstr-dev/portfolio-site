import React from "react";
import styles from "./index.module.scss";

interface Container {
	classNames?: string;
	children: React.ReactNode;
}

export const Container: React.FC<Container> = ({ classNames, children }) => (
	<div className={`${styles.container} ${classNames ? classNames : ""}`}>
		{children}
	</div>
);
