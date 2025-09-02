<script lang="ts">
    import ProjectCarousel from '../lib/ProjectCarousel.svelte';
    import ExpertiseDisplay from '../lib/ExpertiseDisplay.svelte';
    import {onMount} from 'svelte';
    import {fly} from "svelte/transition";

    const roles = [
        "Full-Stack Developer",
        "Game Developer",
        "Pixel Artist",
        "Music Enthusiast",
        "Weird Hardware Projects Enthusiast"
    ];
    const SPECIAL_ROLE = "You're awesome! <3"; // You're awesome!
    const specialRoleIndex = roles.indexOf(SPECIAL_ROLE);

    let currentRoleIndex = 0;
    let currentRole = roles[0];

    onMount(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.10 && specialRoleIndex !== -1) {
                currentRoleIndex = specialRoleIndex;
                currentRole = roles[currentRoleIndex];
            } else {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                currentRole = roles[currentRoleIndex];
            }
        }, 6000);

        return () => clearInterval(interval);
    });
    const projects = [
        {
            id: 1,
            title: "Partify",
            description: "Partify is a webapp that lets you listen to music with friends in discord. It is built using discord.js and Node.js, and it is designed to be easy to use in your discord servers.",
            image: "/images/banners/partify-banner.jpeg",
            tech: ["discord.js", "Node.js", "Javascript"],
            link: "https://github.com/simonknowsstuff/partify"
        },
        {
            id: 2,
            title: "Godot Film Maker",
            description: "Godot Film Maker (GFM for short) is a plugin for Godot 3 that lets you record videos using ffmpeg from your Godot project. It can easily be configured from its script files and provides options for customisation. It is still in the prototype stage and more features are to be added.",
            image: "/images/banners/gfm-banner.jpeg",
            tech: ["Godot", "GDScript", "FFMpeg"],
            link: "https://github.com/simonknowsstuff/Godot-Film-Maker"
        },
        {
            id: 3,
            title: "Medisukham",
            description: "An app that sets alarms automatically from scanned prescriptions using an OCR + LLM pipeline. Currently work in progress.",
            image: "/images/banners/medisukham-banner.jpeg",
            tech: ["FastAPI", "Python", "PaddleOCR", "Ollama"],
            link: "https://github.com/simonknowsstuff/medisukham"
        }
    ];

    // Add click handler to open the user's email client
    function handleGetInTouch() {
        window.location.href = 'mailto:simonknowsstuff@gmail.com';
    }
</script>

<svelte:head>
    <title>Simon Binu - Portfolio</title>
    <meta content="Creative Developer & UI/UX Designer portfolio showcasing modern web applications and digital experiences."
          name="description"/>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<main>
    <div class="container">
        <div class="profile-card">
            <!-- Banner Section -->
            <div class="banner">
                <div class="banner-gradient"></div>
            </div>

            <!-- Profile Section -->
            <div class="profile-section">
                <div class="profile-content">
                    <div class="profile-image">
                        <img alt="Profile"
                             src="/images/profile.jpeg"/>
                    </div>

                    <div class="profile-info">
                        <h1>Simon Binu</h1>
                        <div class="role-animation role-left">
                            {#key currentRole}
                            <span
                                    class="changing-role"
                                    in:fly={{ y: -24, duration: 250, opacity: 1 }}
                                    out:fly={{ y: 24, duration: 250, opacity: 1 }}
                            >{currentRole}
                            </span>
                            {/key}
                        </div>
                        <p class="description">
                           Hi, I'm Simon and I'm a full-stack developer, game developer, pixel artist and a huge hardware enthusiast.
                            I love designing projects with a focus on user experience and functionality. I'm always looking for new challenges
                            and opportunities to learn and grow. I'm passionate about creating innovative solutions and making a positive impact.
                            In my free time, you'll catch me playing games, exploring new technologies and taking long walks.
                        </p>
                    </div>
                </div>

                <div class="contact-info">
                    <div class="contact-item">
                        <img alt="Email icon" class="icon" height="16" src="/images/icons/email.svg" width="16"/>
                        <span>simonknowsstuff@gmail.com</span>
                    </div>
                    <div class="contact-item">
                        <img alt="Location icon" class="icon" height="16" src="/images/icons/location.svg" width="16"/>
                        <span>Kerala, India</span>
                    </div>
                    <div class="contact-item">
                        <img alt="GitHub icon" class="icon" height="16" src="/images/icons/link.svg" width="16"/>
                        <a href="https://simonknowsstuff.is-a.dev/blog/" rel="noopener" target="_blank">My Blog!</a>
                    </div>
                </div>

                <div class="expertise-display">
                    <ExpertiseDisplay gap="{30}" src="/images/expertise.webp"/>
                </div>
            </div>

            <!-- Projects Section -->
            <div class="projects-section">
                <ProjectCarousel {projects}/>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
<!--                <button class="btn primary">Download Resume</button> I do not have a resume yet -->
                <button class="btn primary" on:click={handleGetInTouch}>Get In Touch</button>
            </div>
        </div>
    </div>
</main>
<footer class="site-footer">
    <div class="footer-container">
        <p class="footer-detail">If you'd like to support me, you can do so via <a
                href="https://ko-fi.com/simonknowsstuff"
                rel="noopener"
                target="_blank">
            Ko-Fi!</a></p>
        <nav aria-label="Footer" class="footer-links">
            <a href="https://github.com/simonknowsstuff" rel="noopener" target="_blank">GitHub</a>
            <span aria-hidden="true">•</span>
            <a href="mailto:simonknowsstuff@gmail.com">Email</a>
        </nav>
    </div>
</footer>

<style>

    :root {
        --black: #000000ff;
        --eerie-black: #1b1d1eff;
        --black-olive: #272820ff;
        --black-olive-2: #3e3d32ff;
        --dim-gray: #75715eff;
        --baby-powder: #f8f8f2ff;
        --sky-blue: #66D9EF;
        --sky-blue-hover: #197dbf;
        --yellow-green: #A6E22E;
    }

    main {
        min-height: 100vh;
        background-color: var(--baby-powder);
        padding: 2rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Pixelify Sans', system-ui, sans-serif;
    }

    .container {
        width: 100%;
        max-width: 800px;
    }

    .profile-card {
        background: var(--black-olive-2);
        overflow: hidden;
        position: relative;
        border-radius: 15px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .banner {
        height: 160px;
        background: url('/images/banner.jpeg') center center / cover no-repeat;
        position: relative;
        overflow: hidden;
    }

    .profile-section {
        padding: 1rem 2rem 2rem 2rem;
        background: var(--dim-gray);
    }

    .profile-content {
        display: flex;
        gap: 2rem;
        align-items: center;
        margin-bottom: 2rem;
    }

    .profile-image {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
        position: relative;
    }

    .profile-image img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
        object-fit: cover;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .profile-info {
        flex: 1;
        text-align: left;
    }

    .profile-info h1 {
        margin: 0 0 0.25rem 0;
        color: var(--baby-powder);
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.1;
    }

    .role-animation {
        margin-bottom: 0.5rem;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Left-aligned variant when used beside the image */
    .role-left {
        justify-content: flex-start;
    }

    .changing-role {
        color: var(--baby-powder);
        font-size: 1.125rem;
        font-weight: 600;
        position: absolute;
        width: 100%;
        text-align: left;
    }

    .description {
        color: var(--baby-powder);
        line-height: 1.7;
        margin: 0;
        font-size: 1rem;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 2rem;
        align-items: center;
    }

    .contact-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: var(--baby-powder);
        font-size: 0.875rem;
    }

    .contact-item a {
        color: var(--sky-blue);
        text-decoration: none;
        font-weight: 500;
    }

    .contact-item a:hover {
        text-decoration: underline;
    }

    .icon {
        width: 32px;
        height: 32px;
        flex: 0 0 16px;
        display: inline-block;
        object-fit: contain;
    }

    .expertise-display {
        margin-left: -2rem;
        margin-right: -2rem;
    }

    .projects-section {
        padding: 0 2rem;
    }

    .action-buttons {
        display: flex;
        gap: 1rem;
        padding: 2rem;
        justify-content: center;
    }

    .btn {
        padding: 0.75rem 2rem;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .btn.primary {
        background: var(--dim-gray);
        color: var(--baby-powder);
        box-shadow: 0 4px 15px var(--black-olive);
    }

    .btn.primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px var(--eerie-black);
    }

    .btn.secondary {
        background: transparent;
        color: var(--dim-gray);
        border: 2px solid var(--dim-gray);
        box-shadow: 0 4px 15px var(--black-olive);
    }

    .btn.secondary:hover {
        background: var(--dim-gray);
        color: var(--baby-powder);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px var(--eerie-black);
    }

    .site-footer {
        background: var(--black-olive);
        color: var(--baby-powder);
        padding: 1.25rem 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        text-align: center;
    }

    .footer-container {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        text-align: center;
    }

    .footer-detail {
        margin: 0;
        font-size: 0.875rem;
        opacity: 0.9;
        width: 100%;
    }

    .footer-links {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
    }

    @media (max-width: 768px) {
        main {
            padding: 1rem;
        }

        .profile-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .profile-image {
            margin-bottom: 1rem;
        }

        .profile-info {
            text-align: center;
        }

        .changing-role {
            font-size: 1rem;
            text-align: center;
        }

        .contact-info {
            align-items: flex-start;
        }

        .contact-item {
            justify-content: flex-start;
        }

        .action-buttons {
            flex-direction: column;
            padding: 1.5rem 2rem 2rem;
        }

        .btn {
            width: 100%;
        }

        .profile-section {
            padding: 1rem 1.5rem 1.5rem;
        }

        .projects-section {
            padding: 0 1.5rem;
        }

        /* Match the smaller padding used on profile-section at this breakpoint */
        .expertise-display {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
        }

        .footer-container {
            justify-content: center;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        .profile-image {
            width: 100px;
            height: 100px;
        }

        .banner {
            height: 120px;
        }
    }
</style>