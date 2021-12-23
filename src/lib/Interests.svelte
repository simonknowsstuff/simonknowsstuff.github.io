<script>
  let interests = [
    "learn new skills",
    "create content online",
    "explore the internet",
    "expand my knowledge",
  ];

  let tmp_interests = [];
  let interest_index = -1;

  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";

  Iterate();
  setInterval(Iterate, 2500);

  function Iterate() {
    interest_index++;
    if (interest_index >= interests.length) interest_index = 0;
    tmp_interests = [interests[interest_index]];
  }
</script>

<div style="display:flex; justify-content: center; gap:1ch">
  <p>I like to</p>

  <div style="display:relative">
    {#each tmp_interests as interest (interest)}
      <p
        class="interests"
        in:fly={{ y: 10, duration: 1500 }}
        out:fly={{ y: -10, duration: 750 }}
        animate:flip
      >
        {interest}.
      </p>
    {/each}
  </div>
</div>

<style>
  .interests {
    /* display: inline; */
    font-family: Arial, Helvetica, sans-serif;
    color: var(--arylide-yellow);
    left: 0 !important;
  }

  :global(html) {
    scroll-behavior: smooth;
  }
</style>