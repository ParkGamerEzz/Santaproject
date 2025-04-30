<script>
    import { onMount } from "svelte";
    let playState = $state(false);

    let bool = $state(true);
</script>




<div class="hidden container mx-auto h-screen flex justify-center items-center">
    <div class="rounded-2xl w-1/2 text-center item-center p-5 shadow-lg">
        <h1 class="text-black font-bold">Please <a href="">click</a> To enter the game. </h1>
        <img class="mx-auto rounded-2xl my-5" src="https://64.media.tumblr.com/4543888bb911f341cd3bccddcb491979/bac078f31b6a5638-16/s1280x1920/73c61c5e9bfb12698adb91b59493fc0d0f581b6a.gifv" width="20%" height="20%" alt="">
        <a href=""><button class="border px-6 py-2 bg-green-500 text-white rounded-lg shadow-sm mx-2 font-bold"> Yes</button></a>
        <a href=""><button class="border px-6 py-2 bg-red-500 text-white rounded-lg shadow-sm mx-2 font-bold"> No</button></a>
    </div>
</div>
