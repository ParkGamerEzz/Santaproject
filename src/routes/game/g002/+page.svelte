<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import { modalState, contactForm } from "$lib/index";
    import Modal from "$lib/Modal.svelte";
    import AboutUs from "$lib/About.svelte";
    const modal = { showModal: true, modalId: 'about-us' }
</script>
{#if $modalState == modal}
  <Modal title="ว้าว คุณแก้โจทย์ได้!" buttonOptions={false}>
    <h1 class="text-gray-500 text-xl font-bold"></h1>
    <img src="https://media1.tenor.com/m/GGA8K8d9L7kAAAAC/hyouka-chitanda-eru.gif" width="100%" alt="" >
  </Modal>
{/if}
<div class="bg-blue-600 mx-auto h-screen flex justify-center items-centerw-screen h-screen">

    <div class="bg-blue-100 rounded-2xl w-2/3 text-center item-center p-15 shadow-lg">
        <h1   on:click={() => modalState.update(() => modal)} class="text-4xl text-gray-900 dark:text-white">จงหาสีที่เข้มที่สุด</h1>
        <img on:click={alert("ไม่ถูกต้อง!")} class="mt-7 mx-auto mb-5" src="/color.jpg" width="90%" alt="">
        <span class="inline-block ml-2">
            <!-- <button
            on:click={() => modalState.update(() => modal)}
              class="py-2 px-4 text-white text-md font-medium border bg-blue-600 hover:bg-blue-700 rounded">
              แก้โจทย์
            </button> -->
          </span>
    </div>
</div>