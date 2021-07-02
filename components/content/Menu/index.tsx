import { IconButton } from "../../elements/IconButton";
import Hamburger from "../../../public/svg/hamburger.svg";
import styles from "./index.module.scss";

export const Menu: React.FC = () => (
	<IconButton className={styles.menu__hamburger}>
		<Hamburger
			onClick={() => {
				console.log("Clicked hamburger");
			}}
		/>
	</IconButton>
);
