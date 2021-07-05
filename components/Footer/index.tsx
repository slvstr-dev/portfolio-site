import Link from "next/link";
import { Container } from "../_elements/Container";
import { Logo } from "../_elements/Logo";
import { Form } from "../_elements/Form";
import { Input } from "../_elements/Input";
import styles from "./index.module.scss";

export const Footer: React.FC = () => (
	<footer>
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

		<div className={styles.copyright}>
			<div className={styles.copyright__container}>
				&copy; {new Date().getFullYear()} Created by slvstr.dev.
			</div>
		</div>
	</footer>
);
