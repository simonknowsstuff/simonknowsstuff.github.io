<script>
  import socials_img from '/src/assets/images/socials.gif';

  function handleClick(click_url) {
    window.open(click_url, '_blank');
  }
</script>

<style>
  #twitter {
    width: 80px;
    height: 80px;
    background: url(/src/assets/images/socials.gif) 0 0;
    background-position: 0 0;
  }

  #youtube {
    width: 80px;
    height: 80px;
    background: url(/src/assets/images/socials.gif);
    background-position: -80px 0;
  }

  #github {
    width: 80px;
    height: 80px;
    background: url(/src/assets/images/socials.gif);
    background-position: -160px 0;
  }

  #email {
    width: 80px;
    height: 80px;
    background: url(/src/assets/images/socials.gif);
    background-position: -240px 0;
  }

  #discord {
    width: 80px;
    height: 80px;
    background: url(/src/assets/images/socials.gif);
    background-position: -320px 0;
  }

  .social_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 15px;
  }

  .social_icon {
    cursor: pointer;
  }

</style>

<main>
  <div class="social_container">
    <!--- Images --->
    <div role="img" alt="twitter" class="social_icon" id="twitter" on:click={() => handleClick("https://twitter.com/simonknowsstuff")}></div>
    <div role="img" alt="youtube" class="social_icon" id="youtube" on:click={() => handleClick("https://youtube.com/simonknowsstuff")}></div>
    <div role="img" alt="github" class="social_icon" id="github" on:click={() => handleClick("https://github.com/simonknowsstuff")}></div>
    <div role="img" alt="email" class="social_icon" id="email" on:click={() => handleClick("mailto:simonknowsstuff@protonmail.com")}></div>
    <div role="img" alt="discord" class="social_icon" id="discord" on:click={() => handleClick("https://discord.gg/h6vsmZE4zG")}></div>
  </div>
</main>