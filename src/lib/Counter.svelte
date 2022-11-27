<script lang="ts">
  let count: number = 0;
  $: doubleCount = count * 2;
  const increment = () => {
    count += 1;
  };
  const decrement = () => {
    count -= 1;
  };
</script>

<p>count {count}</p>
<p>doubled {doubleCount}</p>
<div class="button-wrapper">
  <button on:click={increment}> increment </button>
  <button on:click={decrement}> decrement </button>
</div>

<style>
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  button {
    background-color: chocolate;
    color: white;
  }
</style>
