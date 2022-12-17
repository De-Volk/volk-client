<script lang="ts">
  import dayjs, { Dayjs } from 'dayjs';
  import Layout from '$components/frame/Layout.svelte';
  import DatePicker from '$components/DatePicker.svelte';
  import ArrowLeft from '$components/icons/ArrowLeft.svelte';
  import { onMount } from 'svelte';

  let finishDate: Dayjs = dayjs();

  onMount(() => {
    dayjs().locale('ko');
  });

  const onChangeDate = (e: { detail: { datepicked: string } }) => {
    const {
      detail: { datepicked },
    } = e;
    finishDate = dayjs(datepicked);
  };
</script>

<Layout
  hideNavbar
  header="투표 생성"
>
  <div slot="headerLeftContent">
    <div class="header-content">
      <a href="/#/home">
        <ArrowLeft />
      </a>
    </div>
  </div>
  <div class="container">
    <div class="create-vote-form">
      <div class="info">
        <h2>투표를 만들어보세요</h2>
        <p>다른 사람들의 의견을 들어보고 싶나요?</p>
        <p>흥미로운 토픽을 선정해보세요!</p>
      </div>
      <div class="question-wrapper">
        <label for="question">질문</label>
        <textarea
          type="text"
          name="question"
          id="question-input"
        />
      </div>
      <div class="question-wrapper option-wrapper">
        <p>선택지 입력</p>
        <div class="option-item">
          <label for="option1">선택 1</label>
          <input
            type="text"
            name="option1"
            id="question-option1"
          />
        </div>
        <div class="option-item">
          <label for="option2">선택 2</label>
          <input
            type="text"
            name="option2"
            id="question-option2"
          />
        </div>
      </div>
      <div class="question-wrapper option-wrapper">
        <p>마감일 설정</p>
        <div class="option-item">
          <label for="finish-date">날짜 선택</label>
          <DatePicker
            on:datepicked={onChangeDate}
            currentDate={finishDate}
            customClass="datepicker"
          />
        </div>
      </div>
    </div>
    <div class="submit-wrapper">
      <button>투표 만들기</button>
    </div>
  </div>
</Layout>

<style>
  .header-content {
    height: 100%;
    padding: 0 16px;
  }
  .header-content a {
    height: 100%;
    width: 24px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .create-vote-form {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .create-vote-form > div {
    margin-bottom: 10px;
    padding: 1rem;
  }
  .create-vote-form .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  .create-vote-form .info h2 {
    margin: 1rem 0;
  }
  .create-vote-form .question-wrapper {
    display: flex;
    align-items: center;
  }
  .create-vote-form .question-wrapper label {
    margin-right: 10px;
    font-size: 1.1rem;
    min-width: 3rem;
  }
  .create-vote-form .question-wrapper input[type='text'],
  .create-vote-form .question-wrapper textarea {
    flex: 1;
    font-size: 1rem;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #222;
    border-radius: 10px;
  }
  .create-vote-form .question-wrapper.option-wrapper {
    flex-direction: column;
  }
  .create-vote-form .question-wrapper.option-wrapper > p {
    width: 100%;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .create-vote-form .option-wrapper .option-item {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .create-vote-form .option-wrapper .option-item input[type='text'] {
    flex: 1;
    font-size: 1.1rem;
  }
  .submit-wrapper {
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .submit-wrapper button {
    height: 50px;
    width: 100%;
    background-color: #222;
    color: #eee;
    border: none;
    border-radius: 10px;
  }

  :global(.datepicker) {
    border-radius: 10px;
    padding: 0.25rem;
    font-size: 1rem;
    border: 1px solid #222;
    text-align: center;
  }
</style>
