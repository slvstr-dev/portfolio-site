import styles from "../../styles/components/elements/Tag.module.scss";

interface Tag {
	tag: string;
}

export const Tag: React.FC<Tag> = ({ tag }) => (
	<span className={styles.tag}>{tag}</span>
);
