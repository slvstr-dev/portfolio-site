import Link from "next/link";
import { Meta } from "../components/blocks/Meta";
import { Container } from "../components/elements/Container";
import { Logo } from "../components/elements/Logo";
import { Form } from "../components/elements/Form";
import { Input } from "../components/elements/Input";
import styles from "../shared/styles/pages/Contact.module.scss";

const Contact: React.FC = () => (
	<>
		<Meta title="About" description="About description" />

		<div className={styles.contact}>
			<Container classNames={styles.contact__container}>
				<Link href="/" passHref>
					<a>
						<Logo className={styles.contact__logo} />
					</a>
				</Link>

				<div className={styles.contact__postcard}>
					<h4 className={styles.contact__title}>Contact opnemen</h4>

					<Form>
						<Input type="email" placeholder="Jouw emailadres" />
					</Form>
				</div>
			</Container>
		</div>
	</>
);

export default Contact;
