import { config as setRequestConfig } from "@x-drive/request";
import App from "@pages/app.svelte";
import hosts from "@consts/hosts";
import apis from "@consts/apis";

setRequestConfig({
	hosts
	, apis
});

const app = new App({
	"target": document.body
	, "props": {
		"name": "小9"
	}
});

export default app;