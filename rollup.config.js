import typescript from "@rollup/plugin-typescript";
import { emptyDir } from "rollup-plugin-empty-dir";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import sveltePreprocess from "svelte-preprocess";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import pxtransform from "postcss-pxtorem";
import svelte from "rollup-plugin-svelte";
import alias from "@rollup/plugin-alias";
// import css from "rollup-plugin-css-only";
import autoprefixer from "autoprefixer";
// import cssnano from "cssnano";
import path from "path";

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function exit() {
		if (server) {
			server.kill(0);
		}
	}

	return {
		writeBundle() {
			if (server) {
				return;
			};
			server = require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
				"stdio": ["ignore", "inherit", "inherit"]
				, "shell": true
			});

			process.on("SIGTERM", exit);
			process.on("exit", exit);
		}
	};
}

export default {
	"input": "src/main.ts"
	, "output": {
		"sourcemap": !production
		, "format": "es"
		, "name": "app"
		, "dir": "public/build"
		// , "entryFileNames": "app.js"
		, "chunkFileNames": production ? "[name]-[hash].js" : "[name].js"
	}
	, "plugins": [
		production && emptyDir()
		, svelte({
			"preprocess": sveltePreprocess({
				"sourceMap": !production
				, "babel": {
					"presets": [
						[
							"@babel/preset-env"
							, {
								"loose": true
								, "modules": false
								, "targets": {
									"esmodules": true
								}
							}
						]
					]
					, "plugins": [
						[
							"import"
							, {
								"libraryName": "@x-drive/utils"
								, "libraryDirectory": "dist/libs"
								, "camel2DashComponentName": false
							}
							, "@x-drive/utils"
						]
						, "@babel/plugin-syntax-dynamic-import"
						, [
							"@babel/plugin-transform-runtime"
							, {
								"useESModules": true
							}
						]
					]
					, "include": "node_modules/@x-drive"
				}
				, "postcss": {
					"extensions": [".css", ".less"]
					, "plugins": [
						autoprefixer
						, pxtransform({
							"rootValue": 75
							, "propList": ["*"]
						})
					]
				}
			})
			, "compilerOptions": {
				// enable run-time checks when not in production
				"dev": !production
			}
		})
		, postcss()
		// we'll extract any component CSS out into
		// a separate file - better for performance
		// , css()
		, resolve({
			"browser": true
			, "dedupe": ["svelte"]
			, "extensions": [".mjs", ".ts", ".js", ".json", ".svelte"]
		})
		, commonjs()
		, typescript({
			"sourceMap": !production
			, "inlineSources": !production
		})
		, alias({
			"entries": [
				{ "find": "@components", "replacement": path.resolve(__dirname, "src", "components") },
				{ "find": "@utils", "replacement": path.resolve(__dirname, "src", "utils") },
				{ "find": "@consts", "replacement": path.resolve(__dirname, "src", "consts") },
				{ "find": "@pages", "replacement": path.resolve(__dirname, "src", "pages") }
			],
		})
		// 开发模式自动启动服务端
		, !production && serve()

		// 开发模式监控输出目录自动刷新
		, !production && livereload("public")

		// 生产模式启用压缩
		, production && terser()
	]
	, "watch": {
		"clearScreen": false
	}
};
