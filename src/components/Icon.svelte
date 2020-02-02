<script>
    export let name;
    export let size = 20;
    export let inheritFill = false;
</script>

<style>
    .icon {
        fill: currentColor;
    }
</style>

<svg class:icon={inheritFill} width={size} height={size}>
	<use xlink:href='#{name}' />
</svg>