import React from "react";
import styles from "../styles/components/Button.module.scss";

export const Button: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => <button>{children}</button>;
