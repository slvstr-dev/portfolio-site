import { useEffect, useState } from "react";
import { Container } from "../elements/Container";
import { Options } from "../elements/Options";
import { Logo } from "../elements/Logo";
import { Navbar } from "../elements/Navbar";
import { Socials } from "../elements/Socials";
import styles from "../../styles/components/blocks/Header.module.scss";

export const Header: React.FC = () => {
	const [positionY, setPositionY] = useState(0);
	const [stickyHeader, setStickyHeader] = useState(false);

	const updateHeaderStyling = () => {
		const newPositionY = window.scrollY;

		positionY > newPositionY && newPositionY > 0
			? setStickyHeader(true)
			: setStickyHeader(false);

		setPositionY(newPositionY);
	};

	useEffect(() => {
		window.addEventListener("scroll", updateHeaderStyling);

		return () => window.removeEventListener("scroll", updateHeaderStyling);
	}, [positionY]);

	return (
		<header className={stickyHeader ? styles.headerSticky : styles.header}>
			<Container classNames={styles.header__container}>
				<Options classNames={styles.header__options} />

				<Socials classNames={styles.header__socials} />

				<Logo classNames={styles.header__logo} />

				<Navbar />
			</Container>
		</header>
	);
};
