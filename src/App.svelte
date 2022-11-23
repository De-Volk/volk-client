<script lang="ts">
  import {Swipeable} from 'thumb-ui';
  import {tick} from 'svelte';
  import Navigation from "./components/Navigation.svelte";
  import VoteFrame from "./components/VoteFrame.svelte";

  let loginProgress, loginSwipeable, introProgress, zoomOut
  tick().then(() => zoomOut = true)
  const data = [{
    title: '여사친의 깻잎을 떼어주는 남자친구',
    positiveValue: '싸운다',
    negativeValue: '안싸운다'
  },{
    title: '여사친의 깻잎을 떼어주는 남자친구',
    positiveValue: '싸운다',
    negativeValue: '안싸운다'
  },{
    title: '여사친의 깻잎을 떼어주는 남자친구',
    positiveValue: '싸운다',
    negativeValue: '안싸운다'
  }]
</script>

<main class="container">
  <div class="wrapper" style="transform: scale({1 - $loginProgress*0.3})">
		<Swipeable numScreens="{data.length}" let:current bind:progress={introProgress}>
      {#each data as item,index}
        <section class:current={current === index  && zoomOut}>
          <div style:position='relative' style="right: {100 * ($introProgress - index)}%; opacity: {1 - Math.abs($introProgress - index)}">
            <VoteFrame data={item}/>
          </div>
        </section>
      {/each}
    </Swipeable>
  </div>
</main>
<Navigation/>

<style>

.container {
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	margin: 0;
	font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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