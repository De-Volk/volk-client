<script>
    import {timeForToday} from '$utils/date'
    import Button from "../Button.svelte";
  import UserIcon from "../UserIcon.svelte";
    export let data = {};
    const {title,positiveValue,negativeValue,publisher,candidates,endDate} = data;
</script>
<div class="container" on:dblclick={()=>{console.log("더블 클릭")}}>
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
        <p>{positiveValue}vs{negativeValue}</p>
    </div>
    <div class="buttonWrapper">
        <Button type="primary" content="찬성" on:click={()=>{}}/>
        <Button type="secondary" content="반대" on:click={()=>{}}/>
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
        font-size: large;
        font-weight: 400;
    }
    .remainTime{
        text-align: end;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap:1rem;
        box-sizing: border-box;
        width:100%;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 0px 0px 3px #00000029;
    }
    .buttonWrapper{
        display: flex;
        justify-content: space-evenly;
        gap: 1rem;
        height: 2rem;
    }
 
    .users{
        display: flex;
    }
   
</style>