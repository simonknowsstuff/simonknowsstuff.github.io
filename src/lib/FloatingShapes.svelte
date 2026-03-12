<script lang="ts">
    import { onMount } from 'svelte';

    // Generate random background shapes
    interface Shape {
        type: 'triangle' | 'circle' | 'square';
        x: number;
        y: number;
        size: number;
        opacity: number;
        animationName: string;
        duration: number;
        delay: number;
        startX: number;
        startY: number;
        endX: number;
        endY: number;
        startRotation: number;
        endRotation: number;
    }

    const shapes: Shape[] = Array.from({ length: 40 }, (_, index) => {
        const types: ('triangle' | 'circle' | 'square')[] = ['triangle', 'circle', 'square'];
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 15 + 10; // 10-25vw movement
        const startRot = Math.random() * 360;
        const endRot = startRot + (Math.random() - 0.5) * 720;
        
        return {
            type: types[Math.floor(Math.random() * types.length)],
            x,
            y,
            size: Math.random() * 20 + 5, // 5-25px
            opacity: Math.random() * 0.2 + 0.1, // 0.1-0.3
            animationName: `float-${index}`,
            duration: Math.random() * 40 + 40, // 40-80 seconds
            delay: Math.random() * -10,
            startX: 0,
            startY: 0,
            endX: Math.cos(angle) * distance,
            endY: Math.sin(angle) * distance,
            startRotation: startRot,
            endRotation: endRot
        };
    });

    // Inject keyframes into document
    onMount(() => {
        const styleEl = document.createElement('style');
        const keyframes = shapes.map((shape, index) => `
            @keyframes float-${index} {
                0% { 
                    transform: translate(0, 0) rotate(${shape.startRotation}deg);
                }
                50% { 
                    transform: translate(${shape.endX}vw, ${shape.endY}vh) rotate(${shape.endRotation}deg);
                }
                100% { 
                    transform: translate(0, 0) rotate(${shape.startRotation}deg);
                }
            }
        `).join('\n');
        
        styleEl.textContent = keyframes;
        document.head.appendChild(styleEl);
        
        return () => {
            document.head.removeChild(styleEl);
        };
    });
</script>

<!-- Background shapes -->
<div class="shapes-background">
    {#each shapes as shape, index}
        <div 
            class="shape shape-{shape.type}" 
            style="
                left: {shape.x}%; 
                top: {shape.y}%; 
                width: {shape.size}px; 
                height: {shape.size}px;
                opacity: {shape.opacity};
                animation: {shape.animationName} {shape.duration}s ease-in-out infinite;
                animation-delay: {shape.delay}s;
            "
        ></div>
    {/each}
</div>

<style>
    :global(:root) {
        --sky-blue: #66D9EF;
        --yellow-green: #A6E22E;
        --dim-gray: #75715eff;
    }

    .shapes-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    }

    .shape {
        position: absolute;
        pointer-events: none;
        will-change: transform;
    }

    .shape-circle {
        background-color: var(--sky-blue);
        border-radius: 50%;
    }

    .shape-square {
        background-color: var(--yellow-green);
    }

    .shape-triangle {
        background-color: var(--dim-gray);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
</style>

