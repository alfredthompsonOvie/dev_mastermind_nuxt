// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	runtimeConfig: {
		resendApiKey: "",
	},
	app: {
		layoutTransition: { name: "layout", mode: "out-in" },
	},
	css: [
		"normalize.css/normalize.css",
		"~/assets/css/colors.css",
		"~/assets/css/global.css",
	],
	router: {
		options: {
			scrollBehaviorType: "smooth",
		},
	},

	particles: {
		mode: "slim",
	},
	modules: [
		"@nuxt/image",
		"@nuxt/icon",
		"nuxt-particles",
		"@vee-validate/nuxt",
		"nuxt-swiper",
		"nuxt-aos",
		"@nuxt/content",
		"@nuxt/devtools",
		"@tresjs/nuxt",
		"nuxt-anchorscroll",
		
	],
});
