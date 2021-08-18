const nextTranslate = require("next-translate");

module.exports = nextTranslate({
	reactStrictMode: true,
	images: {
		domains: ["qhvpkodyebxnercuaxvv.supabase.in"],
		minimumCacheTTL: 31536000,
	},
});
