<script lang='ts'>
    import SmallVoteFrame from "$components/frame/SmallVote.svelte";
    import {useGetHistoryVotes} from '$utils/api/vote';

    const votes = useGetHistoryVotes();
</script>

<div class="container" >
    {#if $votes.isLoading}
    <p>loading...</p>
  {:else}
    {#each $votes.data as item}
        <SmallVoteFrame data={item}/>
    {/each}
    {/if}
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:3rem 1.2rem 6rem 1.2rem;
        overflow: auto;
        gap:3rem;
        box-sizing: border-box;
        width:100vw;
        height: 100vh;
    }
</style>