<script lang="ts">
  import CreatedVote from '$components/frame/CreatedVote.svelte';
  import SelectedVote from '$components/frame/SelectedVote.svelte';
  import Layout from '$components/frame/Layout.svelte';
  import SettingIcon from '$components/icons/SettingIcon.svelte';
  import UserInfo from '$components/UserInfo.svelte';

  export let isSelected = 0;
  const buttons = ['내가한 투표', '생성한 투표'];
</script>

<Layout header="마이페이지">
  <div
    slot="headerRightContent"
    class="header-right-content"
  >
    <a href="/#/user/edit" class="profile-setting-button">
      <SettingIcon stroke="#222222" />
    </a>
  </div>
  <div class="content-container">
    <section class="mypage-section user-info-section">
      <UserInfo />
    </section>
    <section class="button-container">
      <div class="button-wrapper">
        {#each buttons as title, index}
          <button
            class="toggle-button"
            class:select={isSelected === index}
            on:click={() => (isSelected = index)}>{title}</button
          >
        {/each}
      </div>
    </section>
    <section class="mypage-section vote-section">
      {#if isSelected === 0}
        <SelectedVote />
        <SelectedVote />
        <SelectedVote />
        <SelectedVote />
        <SelectedVote />
        <SelectedVote />
      {:else}
        <CreatedVote />
      {/if}
    </section>
  </div>
</Layout>

<style>
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
  }
  .button-container {
    position:sticky;
    top: 0px;
    z-index: 1000;
    width: calc(100% + 1rem);
  }
  .button-container .button-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;

    background: white;
    padding: 0.5rem 0;
  }
  .button-wrapper {
    background: #2e4558;
  }
  .toggle-button {
    background: #2e4558;
    color: #929ea8;
    border: 0.1rem solid #2e4558;
    border-radius: 6px;
    padding: 0.1rem 1rem;
  }
  .toggle-button:focus {
    outline: none;
  }
  .select {
    background: white;
    color: black;
  }
  .mypage-section {
    background-color: white;
    width: calc(100% - 2rem);
    padding: 1rem;
  }
  .mypage-section.user-info-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 80px;
  }
  .mypage-section.vote-section{
    display: flex;
    flex-direction: column;
    gap:1rem;
  }
  .header-right-content {
    height: 100%;
    display: flex;
    padding: 0 10px;
  }
  .profile-setting-button {
    display: flex;
    align-items: center;
    height: 100%;
    border: none;
  }
  .profile-setting-button:focus {
    outline: none;
  }
  .profile-setting-button:active {
    opacity: 0.8;
  }
</style>
