<script>
  export let headers;
  export let data = [[]];
</script>

<style lang="scss">
  @import "../styles/main.scss";

  table {
    width: 100%;
    overflow: auto;

    border-radius: 4px;
    border-collapse: collapse;
    table-layout: fixed;
    margin: 32px 0;
    color: $color-gray-800;

    thead {
      text-align: left;
      text-transform: lowercase;
      font-variant: small-caps;
      font-weight: $font-weight-light;
      font-size: $font-size-medium;

      @include mobile {
        font-size: $font-size-normal;
      }
    }

    tr:hover {
      background-color: rgba($color-gray-100, 0.1);
    }

    td,
    th {
      border-bottom: 1px solid $color-gray-100;
      padding: 8px 0;

      &:nth-of-type(3n) {
        text-align: right;
      }
    }

    th {
      border-top: 1px solid $color-gray-100;
    }
  }
</style>

<table>
  <thead>
    <tr>
      {#each headers as header}
        <th>{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        {#each row as cell}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
