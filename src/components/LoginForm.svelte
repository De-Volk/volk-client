<script lang="ts">
  import { form, field } from 'svelte-forms';
  import { required, email as emailValidator } from 'svelte-forms/validators';

  import FormInput from '../components/FormInput.svelte';
  import eyeIcon from '../assets/eye.svg';
  import LockIcon from '../components/LockIcon.svelte';

  let isPasswordShown = false;
  let isLoginSubmitted = false;

  const errors = {
    'email': {
      'required': '이메일을 입력해주세요',
      'not_an_email': '이메일 형식을 확인해주세요'
    },
    'password':{
      'required': '비밀번호를 입력해주세요'
    }
  }

  const email = field('email', '', [ required(), emailValidator() ], { validateOnChange:false });
  const password = field('password', '', [ required() ], { validateOnChange:false });
  const loginForm = form(email, password);

  const togglePasswordShown = ()=> {                                          
    isPasswordShown = !isPasswordShown;
  }

  const login = (email: string, password: string): Promise<boolean> => {
    const url = 'http://127.0.0.1:3000/api/v1/users/signin';
    const fetchOptions = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    return fetch(url, fetchOptions).then((response)=> response.json());
  }

  const onSubmitForm = async (event: SubmitEvent)=>{
    event.preventDefault();             
    if(isLoginSubmitted ){
      return;
    }
    isLoginSubmitted = true;

    await loginForm.validate();
    if($loginForm.errors.length > 0){
      isLoginSubmitted = false;
      return;
    }
    
    const summary = loginForm.summary();
    try{
      const loginSuccess = await login(summary.email, summary.password);
      if(!loginSuccess){
        return;
      }
      alert('로그인이 되었습니다.');
    } catch(error) {
      alert('로그인 중 문제가 발생했습니다.');
    } finally {
      loginForm.reset();
      isLoginSubmitted = false;
    }
  }
</script>

<form class="form" on:submit="{onSubmitForm}" >
  <div class="input-wrapper">
    <FormInput 
      type="email" 
      label="이메일" 
      placeholder="이메일을 입력하세요" 
      bind:value={$email.value}
      hasError={$email.errors.length>0}
      errors={$email.errors.map((error)=>errors.email[error])}
    />
    <FormInput  
      type={isPasswordShown ? 'text':'password'}
      placeholder="비밀번호를 입력하세요" 
      label="비밀번호" 
      bind:value={$password.value}
      hasError={$password.errors.length>0}
      errors={$password.errors.map((error)=>errors.password[error])}
    >
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
      Loading...
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