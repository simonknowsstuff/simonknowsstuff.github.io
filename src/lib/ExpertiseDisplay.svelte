<script>
    export let src;  // URL of your 768x128 sprite strip
    export let frameSize = 96; // each frame size
    export let frameCount = 7;  // number of frames in the strip
    export let gap = 16;        // gap between frames
    export let speed = 32;      // speed of scrolling in seconds

    // Build an array of "frame indices" so we can map them
    $: frames = Array.from({ length: frameCount * 2 }, (_, i) => i % frameCount);
</script>

<style>
    .belt-container {
        overflow: hidden;
        width: 100%;
    }

    .belt-track {
        display: flex;
        width: max-content;
        animation: scroll linear infinite;
    }

    .frame {
        width: var(--frame-size);
        height: var(--frame-size);
        background-image: var(--src);
        background-repeat: no-repeat;
        flex-shrink: 0;
    }

    @keyframes scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
    }
</style>

<div class="belt-container">
    <div
            class="belt-track"
            style="
      gap: {gap}px;
      animation-duration: {speed}s;
    "
    >
        {#each frames as idx, i}
            <div
                    class="frame"
                    style="
          --frame-size: {frameSize}px;
          --src: url({src});
          background-position: {-idx * frameSize}px 0;
        "
            ></div>
        {/each}
    </div>
</div>
