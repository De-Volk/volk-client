<script lang="ts">
  import LoginForm from '$components/LoginForm.svelte';
</script>

<div class="container">
  <div class="logo-wrapper">
    <h1 class="logo-title">Volk</h1>
    <p class="logo-subtitle">당신의 생각을 이야기 해보세요</p>
  </div>
  <LoginForm />
  <div class="menu-wrapper">
    <a href="/#/register">회원가입</a>
    <a href="/">비밀번호 찾기</a>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    max-width: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .container .menu-wrapper {
    margin-top: 1rem;
  }

  .logo-wrapper {
    flex: 2;
    display: flex;
    flex-direction: column;

    gap: 1rem;
    justify-content: center;
    align-items: center;

    width: 100%;
  }
  .logo-wrapper .logo-title {
    text-align: center;
    font-size: 3rem;
  }
  .logo-wrapper .logo-subtitle {
    font-weight: 600;
    font-size: 1rem;
  }

  .menu-wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .menu-wrapper a {
    background-color: white;
    font-weight: 500;
    font-size: 1rem;
    border: none;

    width: 120px;
    height: 2.4rem;
  }
</style>
