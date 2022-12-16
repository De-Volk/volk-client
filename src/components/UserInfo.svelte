<script lang="ts"></script>

<div class='user-profile-container'>
    <div class="profile-thumbnail-wrapper">
        <div class="thumbnail">
            <img id='profile-thumbnail' src="https://t3.ftcdn.net/jpg/03/39/45/96/360_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg" alt="">
        </div>
    </div>
    <div class="profile-content-wrapper">
      <p id="name">username</p>
      <div class="detail">
        <p>
            <span>20대</span>, <span>남</span>
        </p>
      </div>
    </div>
</div>

<style>
    .user-profile-container { 
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .profile-thumbnail-wrapper { 
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        aspect-ratio: 1 / 1;
    }
    .profile-thumbnail-wrapper .thumbnail{
        display:flex;
        align-items: center;
        justify-content: center;
        overflow:hidden;
        border-radius: 100%;
    }
    .profile-thumbnail-wrapper .thumbnail img {
        width: 3.6rem;
    }
    .profile-content-wrapper { 
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .profile-content-wrapper #name{
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 2rem;    
    }
</style>