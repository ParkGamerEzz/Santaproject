export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["150px-Redstone.png","favicon.png","getimage.png","kittyumbs-17.jpg","OIP (1).jpg","OIP.jpg","R (1).png","R (2).png","R.png","slimeboy.png","snowball.jpg","Snow_Golem.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.QxAITFPt.js",app:"_app/immutable/entry/app.DabVREye.js",imports:["_app/immutable/entry/start.QxAITFPt.js","_app/immutable/chunks/DhE4NVNZ.js","_app/immutable/chunks/BO6nutE-.js","_app/immutable/chunks/BGy6_Jyc.js","_app/immutable/chunks/DtW4XdyT.js","_app/immutable/entry/app.DabVREye.js","_app/immutable/chunks/BO6nutE-.js","_app/immutable/chunks/DY03q4VQ.js","_app/immutable/chunks/DeMy48Ac.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/MFCYu2Q_.js","_app/immutable/chunks/ZHggQm3I.js","_app/immutable/chunks/DD5a3vw-.js","_app/immutable/chunks/BGy6_Jyc.js","_app/immutable/chunks/DtW4XdyT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/game/g001",
				pattern: /^\/game\/g001\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/playgame",
				pattern: /^\/playgame\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
