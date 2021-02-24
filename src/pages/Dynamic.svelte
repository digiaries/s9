<script lang="ts">
	export let params;
	// import "./index.less";
	import getQuery from "@components/query";
	const query = getQuery();
	console.log(params);
	console.log(query);
	console.log("????");
</script>

<main class="P-dynamic">
	<h1 class="P-dynamicTitle">Dynamic!</h1>
	<p>{query.id}</p>
</main>

<style lang="less">
	.P-dynamic {
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
		.P-dynamic {
			max-width: none;
		}
	}
</style>
