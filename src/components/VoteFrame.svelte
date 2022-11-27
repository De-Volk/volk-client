<script>
    import {timeForToday} from '$utils/date'
    import Button from "./Button.svelte";
  import UserIcon from "./UserIcon.svelte";
    export let handleNext;
    export let data = {};
    const {title,positiveValue,negativeValue,publisher,candidates,endDate} = data;
</script>
<div class="container">
    <div>
        <div class="titleWrapper">
            <div class="userWrapper">
                <UserIcon url={publisher.url}/>
                <p>{publisher.name}</p>
            </div>
            <div class="userWrapper">
                <div class="users">
                    {#each candidates.urls as url}
                        <UserIcon {url}/>
                    {/each}
                </div>
                <p>{candidates.count}명 참여</p>
            </div>
        </div>
        <p class="remainTime">남은 시간 {timeForToday(endDate)}</p>
    </div>
    <div class="contentWrapper">
        <p>{title}</p>
        <br/>
        <p>{positiveValue}</p>
        <p>vs</p>
        <p>{negativeValue}</p>
    </div>
    <div class="buttonWrapper">
        <Button type="primary" content="찬성" on:click={handleNext}/>
        <Button type="secondary" content="반대" on:click={handleNext}/>
    </div>
</div>

<style>
    p{
        font-weight: 600;
    }
    .titleWrapper{
        display: flex;
        justify-content: space-between;
    }
    .userWrapper{
        display: flex;
        gap:1rem;
        align-items: center;
    }
    .contentWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: x-large;
        font-weight: 400;
    }
    .remainTime{
        text-align: end;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:3rem 1.2rem 6rem 1.2rem;
        box-sizing: border-box;
        width:100vw;
        height: 100vh;
    }
    .buttonWrapper{
        display: flex;
        justify-content: space-evenly;
        gap: 1rem;
        height: 3rem;
        z-index: 999;
    }
 
    .users{
        display: flex;
    }
   
</style>