<script>
    let { src, width, x, y, xTarget, yTarget } = $props()
    let className = `absolute left-[${x}px] top-[${y}px]`
    const move = () =>{
        console.log('hello')
        x = xTarget;
        y = yTarget;
    }
    
</script>

<img src={src} alt="" width={width} style={`position: absolute; left: ${x}px; top: ${y}px;`} onclick={move}>
