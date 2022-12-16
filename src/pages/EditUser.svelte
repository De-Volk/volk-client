<script lang="ts">
  import Button from "$components/Button.svelte";
  import FormInput from "$components/FormInput.svelte";
  import Layout from "$components/frame/Layout.svelte";
  import ArrowLeft from "$components/icons/ArrowLeft.svelte";

  import { form, field } from 'svelte-forms';
  import { required, email as emailValidator } from 'svelte-forms/validators';

  const errors = {
    nickname: {
      required: '닉네임을 입력해주세요',
    },
  };
  const email = field('email', 'user@email.com');
  const nickname = field('nickname', '', [required(), emailValidator()], { validateOnChange: false });
  const userForm = form(nickname, email);

  let selectedSex: 'male'|'female' = 'male';
</script>

<Layout header='마이페이지' hideNavbar>
    <div slot='headerLeftContent'>
        <a id="prev-link" href="/#/user">
            <ArrowLeft />
        </a>
    </div>
    <div class='container'>
        <div class='profile-contents-section'>
            <div class="profile-contents profile-image">
                <div class='profile-image-wrapper'>
                    <img class='profile-image' src="https://www.daangn.com/images/meta/home/daangn.png" alt="">
                </div>
            </div>
            <div class="profile-contents form">
                <FormInput 
                    type="email"
                    label="이메일"
                    disabled
                    placeholder="이메일을 입력하세요"
                    bind:value={$email.value}
                />
                <FormInput 
                    type='text'
                    label='닉네임'
                    placeholder='닉네임을 입력하세요'
                    bind:value={$nickname.value}
                />
            </div>
            <div class="profile-contents sex">
                <Button content='남자' type="{selectedSex === 'male' ? 'primary': 'secondary'}"/>
                <Button content='여자' type="{selectedSex === 'female' ? 'primary': 'secondary'}"/>
            </div>
        </div>
        <div class='submit-button-wrapper'>
            <Button type='primary' content='저장' />
        </div>
    </div>
</Layout>

<style>
    #prev-link{
        margin-left:16px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height:100%;
    }
    .submit-button-wrapper{
        padding: 1rem;
    }
    :global(.submit-button-wrapper > button){
        width: 100%;
        height: 50px;
    }

    .profile-contents-section > .profile-contents { 
        margin-bottom: 0.5rem;
    }
    .profile-contents {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:100%;
    }
    .profile-contents.form {
        gap: 10px;
        padding: 1rem;
        width:calc(100% - 2rem);
    }
    :global(.profile-contents.form > div){
        width: 100%;
        margin-bottom: 0.5rem;
    }


    .profile-contents.profile-image{
        padding: 2rem 0;
    }

    .profile-image-wrapper {
        border-radius: 100%;
        overflow: hidden;
        height: 6rem;
        aspect-ratio: 1 / 1;
        border:1px solid;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .profile-contents .profile-image{
        height:100%;
        object-fit: cover;
    }

    .profile-contents.sex{
        height: 50px;
        flex-direction: row;
        padding: 0 1rem;
        width: calc(100% - 2rem);
        gap: 0.5rem;
    }
    :global(.profile-contents.sex > button){
        flex: 1;
        border-radius:8px;
        padding: 0.5rem;
    }

</style>