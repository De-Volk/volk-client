<script>
    import Button from "./Button.svelte";
  import UserIcon from "./UserIcon.svelte";
    export let data = {};
    const {title,positiveValue,negativeValue} = data;
</script>
<div class="container">
    <div>
        <div class="titleWrapper">
            <div class="userWrapper">
                <UserIcon/>
                <p>익명의 게시자</p>
            </div>
            <div class="userWrapper">
                <div class="users">
                    {#each Array(3).fill('') as item , index}
                        <UserIcon/>
                    {/each}
                </div>
                <p>99+명 참여</p>
            </div>
        </div>
        <div class="remainTime">남은 시간 06:12:39</div>
    </div>
    <div class="contentWrapper">
        <p>{title}</p>
        <br/>
        <p>{positiveValue}</p>
        <p>vs</p>
        <p>{negativeValue}</p>
    </div>
    <div class="buttonWrapper">
        <Button type="primary" content="찬성" on:click={()=>{}}/>
        <Button type="secondary" content="반대" on:click={()=>{}}/>
    </div>
</div>

<style>
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
        padding:6rem 1.2rem;
        box-sizing: border-box;
        width:100vw;
        height: 100vh;
    }
    .buttonWrapper{
        display: flex;
        justify-content: space-evenly;
        gap: 1rem;
        height: 3rem;
    }
 
    .users{
        display: flex;
    }
   
</style>