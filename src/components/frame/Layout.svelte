<script lang="ts">
  export let header: string;
  export let hideNavbar: boolean = false;
</script>

<header class="header">
  <div class="left-content">
    <slot name="headerLeftContent" />
  </div>
  <h2>{header}</h2>
  <div class="right-content">
    <slot name="headerRightContent" />
  </div>
</header>
<main class="container" style="--navbar: {hideNavbar ? 0 : 60}px">
  <slot />
</main>

<style>
  .container {
    position: relative;
    width: 100%;
    height: calc(100% - 50px - var(--navbar));
    margin-top: 50px;
    overflow-y: auto;
  }
  .header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    z-index: 1000;
  }
  .header h2 {
    font-size: 20px;
    font-weight: 600;
  }
  .header .left-content,
  .header .right-content {
    position: absolute;
    top: 0;
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
  }
  .header .left-content {
    left: 0px;
  }
  .header .right-content {
    right: 0px;
  }
</style>
