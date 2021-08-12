import Head from "next/head";
import { useRouter } from "next/router";

interface Meta {
	title: string;
	description: string;
	keywords: string;
}

const domain =
	process.env.NODE_ENV === "production"
		? `${process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN}`
		: "http://localhost:3000";

export const Meta: React.FC<Meta> = ({ title, description, keywords }) => {
	const router = useRouter();
	const url = router.asPath ? router.asPath : undefined;
	const canonical = url === "/" ? domain : domain + url;

	return (
		<Head>
			<title>{title}</title>

			<meta charSet="utf-8" />
			<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta content="follow, index" name="robots" />

			<meta content="nl_NL" property="og:locale" />
			<meta content={title} property="og:title" />
			<meta content={description} property="og:description" />
			<meta
				content={`${domain}/images/featured-image.jpg`}
				property="og:image"
			/>
			<meta content={description} property="og:image:alt" />
			<meta content="summary_large_image" name="twitter:card" />
			<meta content={canonical} property="og:url" />

			<meta
				content={`${process.env.NEXT_PUBLIC_G_SITE_VERIFICATION_ID}`}
				name="google-site-verification"
			/>

			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
			<meta
				name="msapplication-config"
				content={`${domain}/favicons/browserconfig.xml`}
			/>

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`${domain}/favicons/apple-touch-icon.png`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`${domain}/favicons/favicon-32x32.png`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`${domain}/favicons/favicon-16x16.png`}
			/>
			<link rel="manifest" href={`${domain}/favicons/site.webmanifest`} />
			<link
				rel="mask-icon"
				href={`${domain}/favicons/safari-pinned-tab.svg`}
				color="#5bbad5"
			/>
			<link rel="shortcut icon" href={`${domain}/favicons/favicon.ico`} />
			<link href={canonical} rel="canonical" />

			{process.env.NODE_ENV === "production" && (
				<>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
					/>
					<script
						async
						dangerouslySetInnerHTML={{
							__html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag("js", new Date());
                                gtag("config", "${process.env.NEXT_PUBLIC_GA_TRACKING_ID}");
                            `,
						}}
					/>
				</>
			)}
		</Head>
	);
};
