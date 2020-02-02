<script>
  import Chart from "chart.js";
  import { onMount } from "svelte";

  export let data;
  export let labels;
  let canvasEl;

  onMount(() => {
    const ctx = canvasEl.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: data
          }
        ]
      },
      options: {
          legend: {
              display: false
          }
      }
    });
  });
</script>

<canvas bind:this={canvasEl} />
