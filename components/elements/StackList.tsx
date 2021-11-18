import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/elements/StackList.module.scss";

interface StackList {
	stack: string[];
}

export const StackList: React.FC<StackList> = ({ stack }) => {
	const { t } = useTranslation("index");

	return (
		<div className={styles.stackList}>
			<h4 className={styles.stackList__heading}>{t("stack_heading")}</h4>

			{stack.map((technology, index) => {
				return (
					<span key={index} className={styles.stackList__item}>
						{technology}
					</span>
				);
			})}
		</div>
	);
};
