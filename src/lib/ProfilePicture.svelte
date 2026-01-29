<script lang="ts">
    let isFlipped = false;
    let isHovered = false;
    let isLockedByClick = false;
    
    function handleHover(hovered: boolean) {
        isHovered = hovered;
        if (!isLockedByClick) {
            isFlipped = hovered;
        }
    }
    
    function handleClick() {
        isLockedByClick = !isLockedByClick;
        isFlipped = isLockedByClick || isHovered;
    }
</script>

<div 
    class="profile-picture-container"
    on:mouseenter={() => handleHover(true)}
    on:mouseleave={() => handleHover(false)}
    on:click={handleClick}
    on:keypress={(e) => e.key === 'Enter' && handleClick()}
    role="button"
    tabindex="0"
>
    <div class="flip-card" class:flipped={isFlipped}>
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img alt="Profile" src="/images/profile.jpeg" />
            </div>
            <div class="flip-card-back">
                <img alt="Profile alternate" src="/images/profile-real.jpeg" />
            </div>
        </div>
    </div>
</div>

<style>
    .profile-picture-container {
        perspective: 1000px;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }
    
    .flip-card {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .flip-card.flipped {
        transform: rotateY(180deg);
    }
    
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }
    
    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        border-radius: 10%;
    }
    
    .flip-card-front {
        transform: rotateY(0deg);
    }
    
    .flip-card-back {
        transform: rotateY(180deg);
    }
    
    .flip-card-front img,
    .flip-card-back img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
        display: block;
    }
</style>
