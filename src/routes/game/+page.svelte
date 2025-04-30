<script>
    import { onMount } from "svelte";
    import ImageItem from "$lib/ImageItem.svelte";
    import { imgGame1 } from "../../data";
    let stage1 = $state(0);
    
</script>

<div class="bg-blue-600 w-screen h-screen">
    
    {#each imgGame1 as item}
    <ImageItem src={item.src} width={item.width} x={item.x} y={item.y} xTarget={item.xTarget} yTarget={item.yTarget}/>
    {/each}
    
</div>
