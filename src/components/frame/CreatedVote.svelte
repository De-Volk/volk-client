<script>
  import CalenderIcon from '$components/icons/CalenderIcon.svelte';
  import PeopleIcon from '$components/icons/PeopleIcon.svelte';
  import Progress from '$components/icons/Progress.svelte';
</script>

<div class="container">
  <div class="title-container">
    <div class="title-wrapper">
      <div class="title-rec" />
      <p>나는 솔직히 잘 생겼다고 생각한다</p>
    </div>
  </div>
  <div class="progress-title-container">
    <div class="title-wrapper">
      <CalenderIcon />
      <p>~ 2022-06-24</p>
    </div>
    <div class="title-wrapper">
      <PeopleIcon />
      <p>1926</p>
    </div>
  </div>
  <div class="progress-title-container">
    <p class="progress-positive-title">66.78%</p>
    <p class="progress-negative-title">34.22%</p>
  </div>
  <div class="progress-container">
    <Progress
      width="66.78%"
      selectedOption={true}
    />
    <Progress
      width="34.22%"
      selectedOption={false}
    />
  </div>
  <div class="answer-container">
    <div
      class="answer-wrapper"
      style:justify-content="flex-start"
    >
      <p>찬성</p>
    </div>
    <div
      class="answer-wrapper"
      style:justify-content="flex-end"
    >
      <p>반대</p>
    </div>
  </div>
</div>

<style>
  .container {
    border-radius: 12px;
    box-shadow: 0px 0px 3px #00000029;
    padding: 1rem;
    position: relative;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
  }
  .title-wrapper {
    display: flex;
    align-items: center;
  }
  .title-rec {
    margin-right: 0.2rem;
    width: 3px;
    height: 15px;
    left: 38px;
    top: 254px;

    background: #2e4558;
    border-radius: 6px;
  }
  .progress-container {
    display: flex;
  }
  :global(.progress-container :nth-child(2)) {
    margin-left: 6px;
  }
  .progress-title-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .progress-positive-title {
    color: #2e4558;
  }
  .progress-negative-title {
    color: #f5ba62;
  }
  .answer-container {
    display: flex;
    justify-content: space-between;
  }
  .answer-wrapper {
    flex: 1;
    display: flex;
    white-space: nowrap;
  }
</style>
