import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/components/elements/StackList.module.scss";

interface StackList {
	classNames: string;
	stack: string[];
}

export const StackList: React.FC<StackList> = ({ classNames, stack }) => {
	const { t } = useTranslation("index");

	return (
		<div className={classNames}>
			<h4 className={styles.stackList__heading}>{t("stack_heading")}</h4>

			<ul>
				{stack.map((technology, index) => {
					return (
						<li key={index} className={styles.stackList__item}>
							{technology}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
