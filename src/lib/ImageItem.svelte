<script>
    import { onMount } from "svelte";

    
    let { src, width, x, y, xTarget, yTarget } = $props()
    let offsetX = 0
    let offsetY = 0
    let coordX = 0
    let coordY = 0 
    let zold = 0
    let dragitem = ""
    onMount  (() => {
        document.onmousedown = startDrag;
        document.onmouseup = stopDrag;
    })
   
    function drag (event) {
        console.log(event.clientX)
        console.log(event.clientY)
        if (event.clientX != 0 && event.clientY != 0){
            x = event.clientX
            y = event.clientY
        }
    }
    function startDrag(e) {
    
        if (!e) {
            var e = window.event;
        }
        if(e.preventDefault) e.preventDefault();

        var targ = e.target ? e.target : e.srcElement;
        // console.log(targ.className)
        if (!targ.className.includes('dragme')) {return};
            zold = targ.style.zIndex
            targ.style.zIndex = 5
            dragitem = targ
            offsetX = e.clientX;
            offsetY = e.clientY;
            // console.log("OK")
            
            

        if(!dragitem.style.left) { dragitem.style.left='0px'};
        if (!dragitem.style.top) { dragitem.style.top='0px'};

        coordX = parseInt(dragitem.style.left);
        coordY = parseInt(dragitem.style.top);
        drag = true
        
        document.onmousemove=dragDiv;
        return false;
        
    }
    function dragDiv(e) {
        if (!drag) {return};
        if (!e) { var e= window.event};
        // console.log("DRAG")
        var targ=e.target?e.target:e.srcElement;
        dragitem.style.left=coordX+e.clientX-offsetX+'px';
        dragitem.style.top=coordY+e.clientY-offsetY+'px';
        return false;
    }
    function stopDrag() {
        
        dragitem.style.zIndex = zold
        drag=false;
        
    }
			
</script>
<style>
      .dragme{
			position:relative;
			width: 270px;
			height: 203px;
			cursor: move;
		}
	#draggable {
			background-color: #ccc;
			border: 1px solid #000;
		}
</style>
<img src={src} alt="" width={width} draggable="true" class="dragme" style={`position: absolute; left: ${x}px; top: ${y}px;`}>
