const nextTranslate = require("next-translate");

module.exports = nextTranslate({
	reactStrictMode: true,
	images: {
		minimumCacheTTL: 31536000,
		domains: ["qhvpkodyebxnercuaxvv.supabase.in"],
	},
});
