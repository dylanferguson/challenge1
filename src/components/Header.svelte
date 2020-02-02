<script>
  import NavItem from "./NavItem.svelte";
</script>

<style lang="scss">
  @import "../styles/main";

  .header-container {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: $header-height;
  }

  .logo {
    font-size: $font-size-xxlarge;
    text-transform: lowercase;
    font-variant: small-caps;
    font-weight: $font-weight-bold;
    color: $color-gray-800;
  }

  nav {
    ul {
      display: flex;
    }
  }
</style>

<div class="header-container">
  <header class="row">
    <a class="logo" href=".">Coin</a>
    <nav>
      <ul>
        <NavItem segment="/currencies/bitcoin">BTC</NavItem>
        <NavItem segment="/currencies/ethereum">ETH</NavItem>
        <NavItem segment="/currencies/litecoin">LTC</NavItem>
      </ul>
    </nav>
  </header>
</div>
