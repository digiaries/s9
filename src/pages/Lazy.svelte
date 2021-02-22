<script lang="ts">
</script>

<main class="P-lazy">
	<h1 class="P-lazyTitle">Lazy!</h1>
</main>

<style lang="less">
	.P-lazy {
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
		.P-lazy {
			max-width: none;
		}
	}
</style>
