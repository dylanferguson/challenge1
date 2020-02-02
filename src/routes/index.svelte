<script>
  import Card from "../components/Card.svelte";
</script>

<style lang="scss">
  @import "../styles/main";

  .card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 24px;

    @include tablet-only {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
	  grid-template-columns: 1fr;
	  grid-gap: 40px;
	}
  }
</style>

<svelte:head>
  <title>Coin | Home</title>
  <meta name="Description" content="Digital Content Platform dev challenge">
</svelte:head>

<div class="content-row home-container">
  <div class="card-container">
    <Card icon="bitcoin" link="/currencies/bitcoin" title="Bitcoin">
      A decentralized digital currency without a central bank or single
      administrator
    </Card>
    <Card icon="ethereum" link="/currencies/ethereum" title="Ethereum">
      A blockchain-based distributed computing platform
    </Card>
    <Card icon="litecoin" link="/currencies/litecoin" title="Litecoin">
      A peer-to-peer cryptocurrency based on an open source
      cryptographic protocol
    </Card>
  </div>
</div>
