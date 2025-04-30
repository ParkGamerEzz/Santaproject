<script>
    import { onMount } from 'svelte';
    import ContextMenu from '$lib/ContextMenu.svelte';
    let buttonPosition = { top: '50%', left: '50%' };
    let windowSize = { width: 0, height: 0 };
    let buttonSize = { width: 0, height: 0 };
    let chrispos = 0;
    let buttonElement;
    
    onMount(() => {
      updateWindowSize();
      window.addEventListener('resize', updateWindowSize);
      
      return () => {
        window.removeEventListener('resize', updateWindowSize);
      };
      
    });
    
    function rightClick(e) {
            e.preventDefault();

            if (document.getElementById(
                "contextMenu").style.display == "block")
                hideMenu();
            else {
                let menu = document
                    .getElementById("contextMenu")

                menu.style.display = 'block';
                menu.style.left = e.pageX + "px";
                menu.style.top = e.pageY + "px";
            }
        }
        
    function updateWindowSize() {
      windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      if (buttonElement) {
        buttonSize = {
          width: buttonElement.offsetWidth,
          height: buttonElement.offsetHeight
        };
      }
    }

    function chrismasester(){
        chrispos = 20
    }
  
    function moveButton() {
      if (!buttonSize.width) {
        buttonSize = {
          width: buttonElement.offsetWidth,
          height: buttonElement.offsetHeight
        };
      }
  
      const maxTop = windowSize.height - buttonSize.height;
      const maxLeft = windowSize.width - buttonSize.width;
  
      const newTop = Math.floor(Math.random() * maxTop);
      const newLeft = Math.floor(Math.random() * maxLeft);
  
      buttonPosition = {
        top: `${newTop}px`,
        left: `${newLeft}px`
      };
    }
  </script>
  

  <div>
  <div class="relative w-full h-screen bg-blue-200 overflow-hidden">

    
    <div class="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 z-0"></div>
    
    <div class="absolute top-20 left-20 text-white text-4xl z-10">❄️</div>
    <div class="absolute top-40 right-40 text-white text-4xl z-10">❄️</div>
    <div class="absolute top-80 left-80 text-white text-4xl z-10">❄️</div>
    <div class="absolute bottom-40 right-20 text-white text-4xl z-10">❄️</div>
    <div class="absolute bottom-80 left-40 text-white text-4xl z-10">❄️</div>
    <ContextMenu/>
    <div class="absolute bottom-0 left-10 text-6xl z-10">🎄</div>
    <div>
    
</div>
    <div on:click={chrismasester} style="transition: bottom 5s, left 0.3s;"class="bottom-{chrispos} absolute bottom-0 right-10 text-6xl z-11;">🎄</div>
    
    <h1 class="absolute top-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-black z-20">
      Brain Car Ice Rage
    </h1>
    
    <div class="absolute top-20 left-20 w-16 h-16 z-20">
      
    </div>
    
    <div class="absolute top-20 right-20 w-16 h-16 z-20">
      
    </div>
    
    <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 z-20">
      
    </div>
    
    <div class="absolute bottom-20 left-1/4 w-16 h-16 z-20">
      
    </div>
  
    <button
      bind:this={buttonElement}
      on:click={moveButton}
      style="position: absolute; top: {buttonPosition.top}; left: {buttonPosition.left}; transition: top 0.3s, left 0.3s;"
      class="bg-purple-700 hover:bg-purple-800 text-yellow-300 font-bold py-4 px-16 rounded-full shadow-lg text-2xl z-30"
    >
      Play
    </button>
    </div>
  </div>
  