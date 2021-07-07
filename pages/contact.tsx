import { Meta } from "../components/blocks/Meta";
import { Postcard } from "../components/blocks/Postcard";
import styles from "../shared/styles/pages/Contact.module.scss";

const Contact: React.FC = () => (
	<>
		<Meta title="Contact" description="Contact description" />

		<main className={styles.contact}>
			<Postcard />
		</main>
	</>
);

export default Contact;
