<script>
  import Icon from "./Icon.svelte";

  export let link;
  export let icon;
  export let title;
</script>

<style lang="scss">
  @import "../styles/main";

  $transition-props: 0.15s ease-in-out;

  a {
    display: block;
    height: 100%;
  }

  .card {
    position: relative;

    padding: 32px 12px;
    padding-left: 100px;
    overflow: hidden;

    border-radius: 8px;
    box-shadow: $box-shadow;
    transition: all $transition-props;
    transition-property: box-shadow, transform;

    &:hover,
    &:focus,
    &:active {
      box-shadow: $box-shadow-hover;
      transform: translateY(-1px);

      .description::after {
        padding-left: 8px;
      }
    }

    &:focus {
      outline: rgba($color-brand-primary, 0.15) solid 3px;
    }

    .icon {
      position: absolute;
      top: 50%;
      margin-top: -55px;
      left: -25px;
    }

    h3 {
      margin-bottom: 12px;
      font-size: $font-size-large;
      font-variant: small-caps;
      text-transform: lowercase;
      font-weight: normal;
    }

    .description::after {
      content: "\2192";
      padding-left: 6px;
      transition: padding-left $transition-props;
    }
  }
</style>

<a rel="prefetch" href={link} class="card">
  <div class="icon">
    <Icon name={icon} size="110px" />
  </div>
  <h3>{title}</h3>
  <p class="description">
    <slot />
  </p>
</a>
