<script lang="ts">
    export let url='';
    let isError = false;
    const handleError = () =>{
        isError = true;
    }
</script>

{#if !isError}
    <img class="icon" src={url} on:error="{handleError}" alt="아이콘" />
{:else}
    <div class="icon"/>
{/if}

<style>
    .icon{
        width: 1.2rem;
        height: 1.2rem;
        background: grey;
        border-radius: 100vw;
    }
</style>