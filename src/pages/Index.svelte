<script lang="ts">
	export let params;
	console.log(params);

	let name: string = "World";
	import Test from "@components/test.svelte";
</script>

<main class="P-main">
	<h1 class="P-mainTitle">Hello <br />{name}!</h1>
	<Test />
</main>

<style lang="less">
	.P-main {
		padding: 1em;
		margin: 0 auto;
		text-align: center;

		&Title {
			font-size: 4em;
			color: #ff3e00;
			font-weight: 100;
			white-space: nowrap;
			text-transform: uppercase;
		}
	}

	@media (min-width: 640px) {
		.P-main {
			max-width: none;
		}
	}
</style>
