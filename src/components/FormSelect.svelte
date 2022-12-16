<script lang="ts">
  import { afterUpdate } from 'svelte';

  export let value: string;
  export let label: string = '';
  export let placeholder: string = '';
  export let hasError: boolean;
  export let errors: string[];

  let conditionalAttributes: { label?: string; placeholder?: string } = {};
  if (label) conditionalAttributes.label = label;
  if (placeholder) conditionalAttributes.placeholder = placeholder;

  const handleClose = () => {
    alert('뒤로가기 ㄴㄴ');
  };
</script>

<svelte:window on:popState={handleClose()} />

<div class="container">
  {#if label}
    <label
      for="input"
      style={hasError ? 'color: rgb(228, 109, 109);' : ''}>{label}</label
    >
  {/if}
  <div
    class="input-wrapper"
    style={hasError ? 'border-color: rgb(228, 109, 109);' : ''}
  >
    <select bind:value>
      <option default>선택</option>
      <option value="남자">남자</option>
      <option value="여자">여자</option>
    </select>
    <slot name="indicator" />
  </div>
  {#if hasError && errors.length > 0}
    <p class="error-message">{errors[0]}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  .container label {
    font-size: 14px;
    line-height: 100%;
    font-weight: 400;
    color: #292929;
  }
  .input-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid #909090;
    border-radius: 8px;
  }

  .container .error-message {
    color: rgb(228, 109, 109);
    font-size: 0.8rem;
  }
  select {
    padding: 14px;
    background: #ffffff;
    border-radius: 8px;
    width: 100%;
    font-size: 1rem;
    border: none;
  }
</style>
