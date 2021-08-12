import Chevron from "../../public/svg/chevron.svg";
import External from "../../public/svg/external.svg";
import styles from "../../styles/components/elements/Button.module.scss";

interface Button {
	href: string;
	classNames?: string;
	text: string;
	isExternal?: boolean;
}

export const Button: React.FC<Button> = ({
	href,
	classNames,
	text,
	isExternal = false,
}) =>
	isExternal ? (
		<a
			className={`${styles.button} ${classNames}`}
			href={href}
			target="_blank"
			rel="noreferrer noopener"
		>
			{text} <External />
		</a>
	) : (
		<a className={`${styles.button} ${classNames}`} href={href}>
			{text} <Chevron />
		</a>
	);
