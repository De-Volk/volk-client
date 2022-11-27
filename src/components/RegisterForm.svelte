<script lang="ts">
  import FormInput from '../components/FormInput.svelte';
  import { form, field } from 'svelte-forms';
  import { required, email, pattern } from 'svelte-forms/validators';
  import FormSelect from './FormSelect.svelte';
  import { useRegisterMutation } from '$utils/api/user';

  type RegisterFormType = {
    name: string;
    key: string;
    placeholder: string;
    type: 'text' | 'email' | 'password' | 'date';
    store: any;
  };

  const registerMutation = useRegisterMutation();
  const password = field('password', '', [required()]);
  const passwordCheck = field('passwordCheck', '', [required(), validCheckPassword()]);
  const nickName = field('nickName', '', [required()]);
  const emailAddress = field('emailAddress', '', [required(), email()]);
  const gender = field('gender', '선택', [pattern(/남자|여자/)]);
  const birth = field('birth', '', [required()]);
  const myForm = form(password, passwordCheck, nickName, gender, birth, emailAddress);

  const errors = {
    nickName: {
      required: '닉네임을 입력해주세요',
    },
    emailAddress: {
      required: '이메일을 입력해주세요',
      not_an_email: '이메일 형식을 확인해주세요',
    },
    password: {
      required: '비밀번호를 입력해주세요',
    },
    gender: {
      pattern: '성별을 선택해주세요',
    },
    passwordCheck: {
      required: '비밀번호를 입력해주세요',
      check_password: '비밀번호가 일치하지 않습니다',
    },
    birth: {
      required: '생년월일을 입력해주세요',
    },
  };

  function validCheckPassword() {
    return (value: string) => ({ valid: value === $password.value, name: 'check_password' });
  }

  $: loginFormData = [
    {
      name: '닉네임',
      key: 'nickName',
      placeholder: '닉네임을 입력하세요',
      type: 'text',
      store: $nickName,
    },
    {
      name: '이메일',
      key: 'emailAddress',
      placeholder: '이메일을 입력하세요',
      type: 'email',
      store: $emailAddress,
    },
    {
      name: '성별',
      key: 'gender',
      placeholder: '성별을 입력하세요',
      type: 'text',
      store: $gender,
    },
    {
      name: '생년월일',
      key: 'birth',
      placeholder: '생년월일을 입력하세요',
      type: 'date',
      store: $birth,
    },
    {
      name: '비밀번호',
      key: 'password',
      placeholder: '비밀번호를 입력하세요',
      type: 'password',
      store: $password,
    },
    {
      name: '비밀번호 확인',
      key: 'passwordCheck',
      placeholder: '비밀번호를 다시 입력하세요',
      type: 'text',
      store: $passwordCheck,
    },
  ] as RegisterFormType[];

  const handleSubmit = async () => {
    await myForm.validate();
    if ($myForm.errors.length > 0) return;
    const { password, gender, nickName, emailAddress, birth } = myForm.summary();
    await $registerMutation.mutate({
      password,
      gender,
      nickName,
      email: emailAddress,
      birth,
    });
  };
</script>

<section class="form">
  <div class="input-wrapper">
    {#each loginFormData as data}
      {#if data.key !== 'gender'}
        <FormInput
          type={data.type}
          label={data.name}
          placeholder={data.placeholder}
          bind:value={data.store.value}
          hasError={data.store.errors.length > 0}
          errors={data.store.errors.map((error) => errors[data.key][error])}
        />
      {:else}
        <FormSelect
          label={data.name}
          placeholder={data.placeholder}
          bind:value={data.store.value}
          hasError={data.store.errors.length > 0}
          errors={data.store.errors.map((error) => errors[data.key][error])}
        />
      {/if}
    {/each}
  </div>
  <button
    type="submit"
    class="submit-button"
    on:click={handleSubmit}>회원가입</button
  >
</section>

<style>
  .form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
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
  .form .submit-button:active {
    opacity: 0.95;
  }
</style>
