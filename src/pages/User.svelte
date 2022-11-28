<script lang="ts">
  import Layout from '../components/frame/Layout.svelte';
  import SettingIcon from '../components/icons/SettingIcon.svelte';
</script>

<Layout header="마이페이지">
  <div
    slot="headerRightContent"
    class="header-right-content"
  >
    <button
      type="button"
      class="profile-setting-button"
    >
      <SettingIcon stroke="#222222" />
    </button>
  </div>
  <div class="content-container">
    <section class="mypage-section user-info-section">
      <div>Profile</div>
      <div>
        <p>username</p>
        <div>
          <span>남</span>
          <span>20대</span>
        </div>
      </div>
    </section>
    <section class="mypage-section">
      <div>tab</div>
    </section>
  </div>
</Layout>

<style>
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #dedede;
  }
  .mypage-section {
    padding: 1rem;
    background-color: white;
  }
  .mypage-section.user-info-section {
    display: flex;
    align-items: center;
    gap: 1rem;
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
