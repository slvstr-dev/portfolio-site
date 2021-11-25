import { IconButton } from "../elements/IconButton";
import useTranslation from "next-translate/useTranslation";
import Code from "../../public/svg/code.svg";
import GitHub from "../../public/svg/github.svg";
import LinkedIn from "../../public/svg/linkedin.svg";
import styles from "../../styles/components/elements/Socials.module.scss";

interface Socials {
	classNames?: string;
}

export const Socials: React.FC<Socials> = ({ classNames }) => {
	const { t } = useTranslation("common");

	return (
		<div className={`${styles.socials} ${classNames}`}>
			<IconButton
				href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`}
				title={t("header_portfolio")}
			>
				<Code />
			</IconButton>

			<IconButton
				href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
				title={t("header_github")}
			>
				<GitHub />
			</IconButton>

			<IconButton
				href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
				title={t("header_linkedin")}
			>
				<LinkedIn />
			</IconButton>
		</div>
	);
};
