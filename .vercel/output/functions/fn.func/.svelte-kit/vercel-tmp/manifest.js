export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/imgs/alphalogo.jpg","assets/imgs/alphalogo.png","assets/imgs/banner.jpg","assets/imgs/desktop.ini","assets/imgs/footer-logo.svg","assets/imgs/home-back.jpg","assets/imgs/kelvin-photo.jpg","assets/imgs/logo.svg","assets/imgs/logo1.svg","assets/imgs/profile-photo.jpg","assets/imgs/scroll_arrow.png","assets/imgs/signature-white.png","assets/imgs/svg-icons/android.svg","assets/imgs/svg-icons/email.svg","assets/imgs/svg-icons/facebook.svg","assets/imgs/svg-icons/firebase.svg","assets/imgs/svg-icons/flutter.svg","assets/imgs/svg-icons/gcp.svg","assets/imgs/svg-icons/github.svg","assets/imgs/svg-icons/instagram.svg","assets/imgs/svg-icons/iOS.svg","assets/imgs/svg-icons/linkedin.svg","assets/imgs/svg-icons/nodejs.svg","assets/imgs/svg-icons/php.svg","assets/imgs/svg-icons/react.svg","assets/imgs/svg-icons/svelte.svg","assets/imgs/svg-icons/twitter.svg","assets/imgs/whitesignature.png","assets/imgs/whitesignature.svg","assets/imgs/work-back/bbs/cover.jpg","assets/imgs/work-back/bbs/cover1.jpg","assets/imgs/work-back/chs/cover.jpg","assets/imgs/work-back/chs/cover1.jpg","assets/imgs/work-back/drunkenape/cover.jpg","assets/imgs/work-back/kwa/cover.jpg","assets/imgs/work-back/orion/cover.jpg","assets/imgs/work-back/orion/cover1.jpg","assets/imgs/work-back/sb4u/cover.jpg","assets/imgs/work-back/sb4u/cover1.jpg","assets/imgs/work-back/unity/cover.jpg","assets/imgs/work-back/unity/cover1.jpg","data/data.json","data/work-data.json","favicon.ico","robots.txt","sitemap.xml"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".ini":"text/plain",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DttW4uYg.js","app":"_app/immutable/entry/app.uaa0OOdj.js","imports":["_app/immutable/entry/start.DttW4uYg.js","_app/immutable/chunks/entry.5KB6xWMn.js","_app/immutable/chunks/scheduler.DVdbQ_i_.js","_app/immutable/chunks/index.D9gEhcZS.js","_app/immutable/entry/app.uaa0OOdj.js","_app/immutable/chunks/scheduler.DVdbQ_i_.js","_app/immutable/chunks/index.YkrStDvy.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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
		},
		server_assets: {}
	}
}
})();
