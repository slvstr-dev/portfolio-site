import Chevron from "../../public/svg/chevron.svg";
import External from "../../public/svg/external.svg";
import styles from "../../shared/styles/components/elements/Button.module.scss";

interface Button {
	href: string;
	classNames?: string;
	title: string;
	displayChevron?: boolean;
	displayExternal?: boolean;
}

export const Button: React.FC<Button> = ({
	href,
	classNames,
	title,
	displayChevron = false,
	displayExternal = false,
}) => (
	<a
		className={`${styles.button} ${classNames}`}
		href={href}
		target="_blank"
		rel="noreferrer noopener"
	>
		{title} {displayChevron && <Chevron />}{" "}
		{displayExternal && <External />}
	</a>
);
