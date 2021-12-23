<script>
  let interests = ["learn new skills", "create content online", "explore the internet", "expand my knowledge"];
  let show_interest = interests[0] + ".";
  let interest_index = 0;
  let interest_text;  
  let visible = true;

  import { fade, fly } from 'svelte/transition';

  setInterval(function() {
    visible = false;
    show_interest = interests[interest_index++ % interests.length] + ".";
    setTimeout(function() {
      visible = true;
    }, 2500)
  }, 2500)

</script>

<style>
  .interests {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--arylide-yellow);
  }

  html { 
    scroll-behavior: smooth;
  }

  #interests-fallback {
    opacity: 0;
  }
</style>

{#if visible}
  <a>I like to <div class="interests" in:fly="{{ y: 10, duration: 1000 }}" out:fade>{show_interest}</div></a>
{/if}

{#if !visible}
  <!-- Background text (fallback) --->
  <a>I like to <div id="interests-fallback" class="interests">{show_interest}</div></a>
{/if}