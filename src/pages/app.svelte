<script lang="ts">
	import { isString } from "@x-drive/utils";
	import Test from "@components/test.svelte";
	export let name: string;
	console.log(isString(name));
</script>

<main class="P-main">
	<h1 class="P-mainTitle">Hello {name}!</h1>
	<Test />
</main>

<style lang="less">
	.P-main {
		padding: 1em;
		margin: 0 auto;
		max-width: 240px;
		text-align: center;

		&Title {
			color: #ff3e00;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}

	@media (min-width: 640px) {
		.P-main {
			max-width: none;
		}
	}
</style>
