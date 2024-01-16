<!-- <script>
  import { useStore } from "../../store.js";
  // let count = useStore((state) => state.count);

  function increment() {
    useStore((state) => state.inc());
  }

  function decrement() {
    useStore((state) => state.dec());
  }

    function reset() {
        useStore((state) => state.reset());
    }
</script>

<button on:click={decrement}>-</button>
<span>{useStore}</span>
<button on:click={increment}>+</button>
<button on:click={reset}>Reset</button> -->
<!-- <script>
  let count = 0;


  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }
</script>
<button on:click={increment}>+</button>
<span>{count}</span>
<button on:click={decrement}>-</button> -->

<script>
  import {count, inc, dec, reset} from "../../nanoStore";
</script>
<h1>Svelte Counter: {$count}</h1>
<button on:click={inc}>+1</button>
<button on:click={dec}>-1</button>
<button on:click={reset}>Reset</button>
