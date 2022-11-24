<script lang="ts">
  import { afterUpdate } from "svelte";


  export let value: string;
  export let type: 'text'|'password'|'email' = 'text';
  export let label: string = '';
  export let placeholder: string = '';

  let conditionalAttributes: {label?:string; placeholder?:string;} = {};
  if(label) conditionalAttributes.label = label;
  if(placeholder) conditionalAttributes.placeholder = placeholder;
  
  let inputElement;
  afterUpdate(() => {
    inputElement.type = type;
  });
</script>

<div class='container'>
  {#if label}
    <label for="input">{label}</label>
  {/if}
  <div class="input-wrapper">
    <input name='input' {...conditionalAttributes} bind:value bind:this={inputElement} />
    <slot name="indicator"></slot>
  </div>
</div>

<style>
.container{
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
.container label {
  font-size: 14px;
  line-height: 100%;
  font-weight:400;
  color:#292929;
}
.input-wrapper {
  display:flex;
  width:100%;
  border: 1px solid #909090;
  border-radius: 8px;
  overflow: hidden;
}
.input-wrapper input {
  padding: 14px;
  width:calc(100% - 28px);

  background: #FFFFFF;
  border: none;
  border-radius: 8px;

  font-size:1rem;
}
.input-wrapper input::placeholder {
  color: #9F9F9F;
}

</style>