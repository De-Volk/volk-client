<script lang="ts">
  import { Swipeable } from 'thumb-ui';
  import { tick } from 'svelte';
  import BigVoteFrame from '$components/frame/BigVote.svelte';
  import { useGetVotes } from '$utils/api/vote';

  const votes = useGetVotes();

  let loginProgress, introProgress, zoomOut;

  const handleNext = () => {
    introProgress.set(Math.min($introProgress + 1, $votes.data.length - 1));
  };

  tick().then(() => (zoomOut = true));
</script>

<main class="container">
  {#if $votes.isLoading}
    <p>loading...</p>
  {:else}
    <div
      class="wrapper"
      style="transform: scale({1 - $loginProgress * 0.3})"
    >
      <Swipeable
        numScreens={$votes.data.length}
        let:current
        bind:progress={introProgress}
      >
        {#each $votes.data as item, index}
          <section class:current={current === index && zoomOut}>
            <div
              style:position="relative"
              style="right: {100 * ($introProgress - index)}%; opacity: {1 -
                Math.abs($introProgress - index)}"
            >
              <BigVoteFrame
                data={item}
                {handleNext}
              />
            </div>
          </section>
        {/each}
      </Swipeable>
    </div>
  {/if}
</main>

<style>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 15px;
    line-height: 1.5;
  }
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
  }
  section {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
