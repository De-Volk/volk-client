<script lang="ts">
  export let type: 'primary' | 'secondary' | 'default';
  export let content;
</script>

<button
  class={type}
  on:click>{content}</button
>

<style>
  button {
    width: 200px;
    border-radius: 10px;
    border: none;
  }
  .primary {
    background: #222222;
    color: white;
  }
  .secondary {
    background: #efefef;
    color: #222222;
  }
  .default {
    background: white;
    color: #222222;
  }
</style>
