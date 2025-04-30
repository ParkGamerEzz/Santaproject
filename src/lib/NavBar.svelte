<script>
    import { test } from "../store";
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
</script>

<nav class="bg-white p-5 flex justify-between items-center">
    <a onclick="{() => {goto('/')}}" class="cursor-pointer"><button><h1 class="text-2xl"> Stage </h1></button></a>
    <div class="space-x-5">
        <button onclick="{$test[0] ? () => {goto('/game/g001')} : null}" class="bg-blue-500 text-white font-bold py-2 px-4 rounded  opacity-{$test[0]? "100 cursor-pointer":"50 bg-red-500 cursor-not-allowed" } {$page.url.pathname == "/game/g001" ?" border-5 border-amber-300" : null} ">1</button>
        <button onclick="{$test[1] ? () => {goto('/game/g002')} : null}" class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-{$test[1]? "100 cursor-pointer":"50 bg-red-500 cursor-not-allowed" } {$page.url.pathname == "/game/g002" ?" border-5 border-amber-300" : null} ">2</button>
        <button onclick="{$test[2] ? () => {goto('/game/g003')} : null}" class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-{$test[2]? "100 cursor-pointer":"50 bg-red-500 cursor-not-allowed" } {$page.url.pathname == "/game/g003" ?" border-5 border-amber-300" : null} ">3</button>
    </div>

    <button>
        <!-- ล่องหน -->
    </button>
</nav>