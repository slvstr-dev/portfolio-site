import Link from "next/link";
import { Container } from "../../misc/Container";
import { Logo } from "../../elements/Logo";
import { Form } from "../../elements/Form";
import { Input } from "../../elements/Input";
import { Button } from "../../elements/Button";
import styles from "./index.module.scss";

export const Contact: React.FC = () => (
	<section className={styles.contact}>
		<Container className={styles.contact__container}>
			<Link href="/" passHref>
				<a>
					<Logo className={styles.contact__logo} />
				</a>
			</Link>

			<div className={styles.contact__postcard}>
				<h4 className={styles.contact__title}>Contact opnemen</h4>

				<Form>
					<Input type="email" placeholder="Jouw emailadres" />

					<Input type="submit" value="&gt;" />
				</Form>
			</div>
		</Container>
	</section>
);
