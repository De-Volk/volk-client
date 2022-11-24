<script lang="ts">
  import FormInput from '../components/FormInput.svelte';
  import eyeIcon from '../assets/eye.svg';
  import LockIcon from '../components/LockIcon.svelte';

  let emailValue='';
  let passwordValue='';
  let isPasswordShown = false;
  let isLoginSubmitted = false;

  const togglePasswordShown = ()=> {
    isPasswordShown = !isPasswordShown;
  }

  const login = (isSuccess: boolean)=> {
    return new Promise((resolve)=>{
      setTimeout(()=>{
          if(isSuccess){
            resolve(true);
          }else{
            resolve(false);
          }
        },300);
      });
  }

  const onSubmitForm = async (event: SubmitEvent)=>{
    event.preventDefault();                  
    if(isLoginSubmitted || !emailValue || !passwordValue){
      return;
    }

    isLoginSubmitted = true;                                                                                                                                  
    const loginSuccess = await login(true);

    isLoginSubmitted = false;
    if(!loginSuccess){
      return;
    }

    emailValue='';
    passwordValue='';
  }

</script>

<form class="form" on:submit="{onSubmitForm}" >
  <div class="input-wrapper">
    <FormInput type="email" label="이메일" placeholder="이메일을 입력하세요" bind:value={emailValue} />
    <FormInput  label="비밀번호" placeholder="비밀번호를 입력하세요" bind:value={passwordValue} type={isPasswordShown ? 'text':'password'}>
        <button class='show-password-button' slot="indicator" type="button" on:click="{togglePasswordShown}">
          {#if !isPasswordShown}
            <img src={eyeIcon} alt='보기'/>
            {:else}
              <LockIcon width="18" height="18"/>
          {/if}
        </button>
    </FormInput>
  </div>
  <button type="submit" class="submit-button">
    {#if isLoginSubmitted}
      로그인 중...
      {:else}
        로그인
    {/if}
  
  </button>
</form>


<style>
  .form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width:100%;
  }
  .form .input-wrapper { 
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form .submit-button {
    padding: 10px;
    border-radius: 8px;
    background-color: #222222;

    font-weight: 500;
    font-size: 1.2rem;
    color: white;
    transition: opacity 60ms linear;
  }
  .form .submit-button:active{
    opacity: 0.95;
  }
  .form .show-password-button{
    display: flex;
    align-items: center;
    justify-content: center;
    border:none;
    background: transparent;
    padding:1rem;
  }

</style>