<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style lang="scss">
  @import "../styles/main";

  h1 {
	font-size: $font-size-xxxlarge;
	
	@include mobile {
		font-size: $font-size-xlarge;
	}
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="content-row error">
  <h1>{status}</h1>

  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
