<script>
    import { onMount } from "svelte";
    import ImageItem from "$lib/ImageItem.svelte";
    import { imgGame1 } from "../../data";
    let stage1 = $state(0);
    let allitempos = $state([])
    let item1pos = $state([])

    onMount (()=> {
        allitempos = JSON.parse(localStorage.getItem('allitempos')) || []
        
        for (let i = 0; i < imgGame1.length; i++) {
            allitempos.push(item1pos)
            

        }
    
    })
   
  
    
    
</script>

<div class="bg-blue-600 w-screen h-screen">
    
    {#each imgGame1 as item}
        <ImageItem name = {item.name} src={item.src} width={item.width} x={item.X} y={item.Y} xTarget={item.xTarget} yTarget={item.yTarget} />
    {/each}

    
</div>
