export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sandbox/pavement-1933-2023/_app",
	assets: new Set([".nojekyll","README.md","favicon.png","fonts/.DS_Store","fonts/fira-sans-extra-condensed-latin-400-italic.woff","fonts/fira-sans-extra-condensed-latin-400-italic.woff2","fonts/fira-sans-extra-condensed-latin-400-normal.woff","fonts/fira-sans-extra-condensed-latin-400-normal.woff2","fonts/fira-sans-extra-condensed-latin-ext-400-italic.woff","fonts/fira-sans-extra-condensed-latin-ext-400-italic.woff2","fonts/fira-sans-extra-condensed-latin-ext-400-normal.woff","fonts/fira-sans-extra-condensed-latin-ext-400-normal.woff2","fonts/fira-sans-latin-400-italic.woff","fonts/fira-sans-latin-400-italic.woff2","fonts/fira-sans-latin-400-normal.woff","fonts/fira-sans-latin-400-normal.woff2","fonts/fira-sans-latin-700-italic.woff","fonts/fira-sans-latin-700-italic.woff2","fonts/fira-sans-latin-700-normal.woff","fonts/fira-sans-latin-700-normal.woff2","fonts/fira-sans-latin-ext-400-italic.woff","fonts/fira-sans-latin-ext-400-italic.woff2","fonts/fira-sans-latin-ext-400-normal.woff","fonts/fira-sans-latin-ext-400-normal.woff2","fonts/fira-sans-latin-ext-700-italic.woff","fonts/fira-sans-latin-ext-700-italic.woff2","fonts/fira-sans-latin-ext-700-normal.woff","fonts/fira-sans-latin-ext-700-normal.woff2","fonts/vollkorn-latin-400-italic.woff","fonts/vollkorn-latin-400-italic.woff2","fonts/vollkorn-latin-400-normal.woff","fonts/vollkorn-latin-400-normal.woff2","fonts/vollkorn-latin-ext-400-italic.woff","fonts/vollkorn-latin-ext-400-italic.woff2","fonts/vollkorn-latin-ext-400-normal.woff","fonts/vollkorn-latin-ext-400-normal.woff2","images/.DS_Store","images/album-brighten.jpg","images/album-crooked.jpg","images/album-slanted.jpg","images/album-terror.jpg","images/album-westing.jpg","images/album-wowee.jpg","images/banner-1.png","images/banner-2.png","images/banner-3.png","images/banner-4.png","images/banner-5.png","images/border-h.png","images/border-v.png","images/cloud-1990s.svg","images/cloud-2010s.svg","images/cloud-2020s.svg","images/cloud.svg","images/highlight-d2010s.png","images/highlight-d2020s-d2010s.png","images/highlight-d2020s.png","images/malk-1.gif","images/malk-2.gif","images/malk-3.gif","images/malk-4.gif","images/malk-5.gif","images/pavement-1933-2023-setlists-promo-facebook.png","images/pavement-1933-2023-setlists-promo-twitter.png","images/pvmt.png","images/set-conduitforsale.png","images/set-cutyourhair.png","images/set-fillmorejive.png","images/set-fin.png","images/set-gangsters&pranksters.png","images/set-grounded.png","images/set-lorettasscars.png","images/set-m-conduitforsale.png","images/set-m-cutyourhair.png","images/set-m-fillmorejive.png","images/set-m-fin.png","images/set-m-gangsters&pranksters.png","images/set-m-grounded.png","images/set-m-lorettasscars.png","images/set-m-oursinger.png","images/set-m-rangelife.png","images/set-m-stopbreathin.png","images/set-m-witchitaito.png","images/set-oursinger.png","images/set-rangelife.png","images/set-stopbreathin.png","images/set-witchitaito.png","images/star-blue.png","images/star-yellow.png","images/texture.png","robots.txt"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".svg":"image/svg+xml",".gif":"image/gif",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.e8b2f01d.js","app":"_app/immutable/entry/app.d52e7adc.js","imports":["_app/immutable/entry/start.e8b2f01d.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/singletons.231d340e.js","_app/immutable/chunks/paths.df03ed27.js","_app/immutable/entry/app.d52e7adc.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/index.7924dd0b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
