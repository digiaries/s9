<script lang="ts">
	export let params;
	// import "./index.less";
	import getQuery from "@components/query";
	const query = getQuery();
	for (let i = 0; i < 10; i++) {
		setTimeout(
			(j) => {
				params.type = `Test${j}`;
			},
			2000 * i,
			i
		);
	}
</script>

<div class="P-dynamic">
	<h1 class="P-dynamicTitle">Dynamic!</h1>
	<p>{params.type}{query.id || ""}</p>
	<p>{JSON.stringify(query)}</p>
</div>

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
