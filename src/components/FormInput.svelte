<script lang="ts">
  import { afterUpdate } from 'svelte';

  export let value: string;
  export let type: 'text' | 'password' | 'email' | 'date' = 'text';
  export let label: string = '';
  export let placeholder: string = '';
  export let hasError: boolean = false;
  export let errors: string[] = [];
  export let disabled: boolean = false;

  let conditionalAttributes: { label?: string; placeholder?: string; disabled?:boolean } = {};
  if (label) conditionalAttributes.label = label;
  if (placeholder) conditionalAttributes.placeholder = placeholder;
  if(disabled) conditionalAttributes.disabled = true;

  let inputElement;

  afterUpdate(() => {
    inputElement.type = type;
  });
</script>

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
    <input
      name="input"
      {...conditionalAttributes}
      bind:value
      bind:this={inputElement}
    />
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
  .input-wrapper input {
    padding: 14px;
    width: 100%;
    background: none;
    border-radius: 8px;
    border: none;
    color-scheme: dark;
    font-size: 1rem;
  }
  .input-wrapper input::placeholder {
    color: #9f9f9f;
  }

  .container .error-message {
    color: rgb(228, 109, 109);
    font-size: 0.8rem;
  }
</style>
