import useTranslation from "next-translate/useTranslation";
import { Button } from "./Button";
import { Container } from "./Container";
import { StackList } from "./StackList";
import styles from "../../styles/components/elements/Accomplisment.module.scss";

interface Accomplisment {
	accomplisment: {
		id: number;
		name_nl: string;
		name_en: string;
		description_nl: string;
		description_en: string;
		category: string;
		stack: string[];
		website_url: string;
		repository_url: string;
		image_url: string;
	};
	locale: string;
}

export const Accomplisment: React.FC<Accomplisment> = ({
	accomplisment,
	locale,
}) => {
	const { t } = useTranslation("index");

	return (
		<article>
			<Container>
				<h3 className={styles.accomplisment__heading}>
					<span className={styles.accomplisment__subheading}>
						{accomplisment.category}
					</span>

					{locale === "nl"
						? accomplisment.name_nl
						: accomplisment.name_en}
				</h3>

				<div className={styles.accomplisment__content}>
					<p className={styles.accomplisment__description}>
						{locale === "nl"
							? accomplisment.description_nl
							: accomplisment.description_en}
					</p>

					<StackList
						classNames={styles.accomplisment__stackList}
						stack={accomplisment.stack}
					/>
				</div>

				<div className={styles.accomplisment__buttons}>
					{accomplisment.website_url && (
						<Button
							text={accomplisment.category}
							href={accomplisment.website_url}
							isExternal
						/>
					)}

					{accomplisment.repository_url && (
						<Button
							text={t("accomplisments_repository")}
							href={accomplisment.repository_url}
							isExternal
						/>
					)}
				</div>
			</Container>
		</article>
	);
};
