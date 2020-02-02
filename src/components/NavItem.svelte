<script>
  export let segment = null;
</script>

<style lang="scss">
  @import "../styles/main";

  li {
    list-style: none;

    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  :global(.active) {
    border-bottom: 1px solid $color-gray-900;
  }
</style>

<li>
  <a rel="prefetch" href={segment}>
    <slot />
  </a>
</li>
