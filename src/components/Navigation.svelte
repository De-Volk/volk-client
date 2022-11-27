<script lang="ts">
  const navItems = [
    { src: 'Home', type: 'none' },
    { src: 'Hot', type: 'none' },
    { src: 'Add', type: 'focus' },
    { src: 'History', type: 'none' },
    { src: 'User', type: 'none' },
  ];
</script>

<nav>
  {#each navItems as item}
    {@const src = '/assets/' + item.src + '.svg'}
    {@const href = '/#/' + item.src}
    <a {href}>
      <img
        class:focus={item.type === 'focus'}
        {src}
        alt="button"
      />
    </a>
  {/each}
</nav>

<style>
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  nav {
    position: fixed;
    bottom: 0px;
    left: 0px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 60px;
    background: #222222;
  }
  .focus {
    width: 1.8rem;
    border-radius: 10px;
    background: white;
    padding: 0.2rem 0.8rem;
  }
</style>
