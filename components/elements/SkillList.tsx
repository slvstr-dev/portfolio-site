import styles from "../../styles/components/elements/SkillList.module.scss";

interface SkillList {
	skill: {
		id: number;
		category: string;
		list: string[];
	};
}

export const SkillList: React.FC<SkillList> = ({ skill }) => (
	<div className={styles.skillList}>
		<h3 className={styles.skillList__heading}>{skill.category}</h3>

		<ul>
			{skill.list.map((item, index) => {
				return (
					<li key={index} className={styles.skillList__item}>
						{item}
					</li>
				);
			})}
		</ul>
	</div>
);
