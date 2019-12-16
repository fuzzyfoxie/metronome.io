export default {
	rootDir: "./",
	srcDir: "./src",
	buildDir: "./dist",

	buildModules: ["@nuxt/typescript-build"],

	modules: [
		// Simple usage
		"nuxt-buefy",
	],

	head: {
		link: [
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css?family=Questrial&display=swap",
			},
		],
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
		],
	},
	css: ["~/less/main.less"],
};
