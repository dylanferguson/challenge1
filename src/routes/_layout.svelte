<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Icons from "../components/Icons.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../styles/main";

  body {
    font-family: $font-family-primary;
  }

  .row,
  .content-row {
    width: 100%;
    max-width: $content-width;
    margin: 0 auto;
    padding: 0 8px;
  }

  .content-row {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .site-container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: inherit;
  }

</style>

<div class="site-container">
  <Icons />
  <Header {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>
