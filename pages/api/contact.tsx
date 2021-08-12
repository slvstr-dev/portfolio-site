import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const body = JSON.parse(req.body);

	const message = `
        Name: ${body.name}<br />
        Email: ${body.email}<br />
        ${body.phone !== "" ? `Phone: ${body.phone}<br />` : ""}
        Message: ${body.message}`;

	const data = {
		to: `${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
		from: `${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
		subject: `New message from ${body.name}`,
		text: message,
		html: message,
	};

	try {
		await mail.send(data);
		res.status(200).end();
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
};
