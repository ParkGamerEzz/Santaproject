<script>
    import { test } from "../store";
</script>

<nav class="bg-white p-5 flex justify-between items-center">
    <h1 class="text-2xl"> Stage </h1>
    <div class="space-x-5">
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-{$test[0]? "100 cursor-pointer":"50 cursor-not-allowed" } ">1</button>
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-{$test[1]? "100 cursor-pointer":"50 cursor-not-allowed" } ">2</button>
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-{$test[2]? "100 cursor-pointer":"50 cursor-not-allowed" } ">3</button>
    </div>

    <button>
        <!-- ล่องหน -->
    </button>
</nav>