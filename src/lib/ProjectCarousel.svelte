<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    interface Project {
        id: number;
        title: string;
        description: string;
        image: string;
        tech: string[];
        link: string;
    }

    export let projects: Project[] = [];

    let currentIndex = 0;
    let carouselContainer: HTMLDivElement;
    let touchStartX = 0;
    let touchEndX = 0;
    let autoRotateInterval: number;

    function nextProject() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateCarousel();
    }

    function prevProject() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateCarousel();
    }

    function goToProject(index: number) {
        currentIndex = index;
        updateCarousel();
        resetAutoRotate();
    }

    function updateCarousel() {
        if (carouselContainer) {
            const translateX = -currentIndex * 100;
            carouselContainer.style.transform = `translateX(${translateX}%)`;
        }
    }

    function handleTouchStart(e: TouchEvent) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e: TouchEvent) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        if (!touchStartX || !touchEndX) return;
        
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                nextProject();
            } else {
                prevProject();
            }
            resetAutoRotate();
        }
        
        touchStartX = 0;
        touchEndX = 0;
    }

    function resetAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
        autoRotateInterval = window.setInterval(() => {
            nextProject();
        }, 10000);
    }

    onMount(() => {
        resetAutoRotate();
    });

    onDestroy(() => {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
    });
</script>

<div class="carousel-wrapper">
    <div class="carousel-header">
        <h3>Featured Projects</h3>
    </div>

    <div 
        class="carousel-container"
        role="region"
        aria-label="Project carousel"
        on:touchstart={handleTouchStart}
        on:touchmove={handleTouchMove}
        on:touchend={handleTouchEnd}
    >
        <div bind:this={carouselContainer} class="carousel-track">
            {#each projects as project, index}
                <div class="project-card">
                    <div class="project-image">
                        <img src={project.image} alt={project.title}/>
                    </div>
                    <div class="project-content">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div class="tech-stack">
                            {#each project.tech as tech}
                                <span class="tech-tag">{tech}</span>
                            {/each}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener" class="project-link">
                            View Project →
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="carousel-dots">
        {#each projects as _, index}
            <button
                    class="dot {index === currentIndex ? 'active' : ''}"
                    on:click={() => goToProject(index)}
                    aria-label="Go to project {index + 1}"
            ></button>
        {/each}
    </div>
</div>

<style>
    .carousel-wrapper {
        width: 100%;
        margin-top: 2rem;
    }

    .carousel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .carousel-header h3 {
        margin: 0;
        color: var(--baby-powder);
        font-size: 1.25rem;
        font-weight: 600;
    }

    .carousel-container {
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        touch-action: pan-y;
        user-select: none;
    }

    .carousel-track {
        display: flex;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .project-card {
        min-width: 100%;
        background: var(--black-olive);
        display: flex;
        flex-direction: column;
    }

    .project-image {
        height: 200px;
        overflow: hidden;
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
        transform: scale(1.05);
    }

    .project-content {
        padding: 1.5rem;
        flex: 1;
    }

    .project-content h4 {
        margin: 0 0 0.75rem 0;
        color: var(--baby-powder);
        font-size: 1.125rem;
        font-weight: 600;
    }

    .project-content p {
        margin: 0 0 1rem 0;
        color: var(--baby-powder);
        line-height: 1.6;
        font-size: 0.875rem;
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .tech-tag {
        background: #f1f5f9;
        color: var(--black-olive);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 500;
    }

    .project-link {
        color: var(--sky-blue);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.875rem;
        transition: color 0.3s ease;
    }

    .project-link:hover {
        color: var(--sky-blue-hover);
    }

    .carousel-dots {
        display: flex;
        justify-content: center;
        gap: 0.625rem;
        margin-top: 1.5rem;
    }

    .dot {
        width: 10px;
        height: 10px;
        padding: 6px; /* larger hit area without growing the visible dot */
        box-sizing: content-box;
        border: none;
        border-radius: 50%;
        background: var(--dim-gray);
        background-clip: content-box; /* keeps the dot itself small */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .dot.active {
        background: var(--baby-powder);
        transform: scale(1.15);
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
    }

    .dot:hover {
        background: var(--black-olive);
    }

    .dot:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        .project-image {
            height: 160px;
        }

        .project-content {
            padding: 1rem;
        }
    }
</style>