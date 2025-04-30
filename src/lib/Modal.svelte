<script>
    //
    import { closeModal, processModal } from "$lib/index";
    import { test } from "../store";
    //
    export let title = "Modal title goes here.."
    
    
    const action = () =>{
        
        $closeModal()
        test.set([true, true, true])
        // console.log($test)
        window.location.href = '/game/g003'
        
        
    }
  </script>
  
  <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex ">
    <div class="relative w-2/4 my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <h3 class="text-3xl text-center text-gray-600 font-semibold">
            {title}
          </h3>
          <button class="p-1 ml-auto bg-transparent border-0 text-gray-500  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" on:click={$closeModal()}>
            <span class="bg-transparent text-gray-500 opacity-4 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        <!--body-->
        <div class="relative p-6 flex-auto">
          <slot></slot>
        </div>
        <!--footer-->
        <div class="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                on:click={action}
                  class="py-2 px-4 text-white text-md rounded-xl font-medium border bg-blue-600 hover:bg-blue-700 rounded">
                  ไปด่านถัดไป
                </button>
        </div>
      </div>
    </div>
  </div>
  <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>