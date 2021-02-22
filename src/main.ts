import { config as setRequestConfig } from "@x-drive/request";
import flexible from "@x-drive/flexible";
import hosts from "@consts/hosts";
import apis from "@consts/apis";
import App from "./App.svelte";

flexible("S9", true);

setRequestConfig({
	hosts
	, apis
});

const app = new App({
	"target": document.body
});

export default app;