<script>
  import Interests from './lib/Interests.svelte';
  import Projects from './lib/Projects.svelte';
  import Socials from './lib/Socials.svelte';

  import aboutmeFace from '/src/assets/images/simon-no-face.gif';
</script>

<style>
  :root {
    /* CSS HEX */
    --dark-byzantium: #482c3dff;
    --sweet-brown: #ac3931ff;
    --arylide-yellow: #e5d352ff;
    --maximum-green-yellow: #d9e76cff;
    --olivine: #96b27dff;
    --morning-blue: #759885ff;
    --steel-teal: #648b89ff;
    --teal-blue: #537d8dff;

    /* CSS HEX */
    --dark-jungle-green: #071e22ff;
    --myrtle-green: #1d7874ff;
    --wintergreen-dream: #679289ff;
    --peach-crayola: #f4c095ff;
    --red-pigment: #ee2e31ff;
    --cultured: #f2f2f2ff;
  }

  main {
    text-align: center;
    font-family: Arial, sans-serif;
  }

  :global(body) { 
    /* Thanks to u/RoneStobe for the border margin fix. */
    margin: 0;
    padding: 0;
    background-color: var(--wintergreen-dream); 
    flex: 1;
  }

  #header {
    background-color: var(--teal-blue);
    
    /* Background image */
    background-image: url("/src/assets/images/header-bg.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    /* Transform properties */
    padding: 80px;
    color: #EBEBEB;
    top: 0;
    left: 0;
    font-weight: 600;
  }

  .websection {
    padding: 50px;
    color: #EBEBEB;
  }

  #aboutme {
    background-color: var(--wintergreen-dream);
  }

  #projects {
    background-color: var(--myrtle-green);
  }

  #socials {
    background-color: var(--wintergreen-dream);
  }

  #footer {
    background-color: var(--dark-jungle-green);
    min-height: 50px;
    padding: 20px;
    color: var(--peach-crayola);
    text-align: left;
  }

  #footer a {
    color: inherit;
    text-decoration: none;
  }
</style>

<main>
  <div id="header">
    <h1>Hello, my name is Simon!</h1>
    <Interests />
  </div>
  <div id="aboutme" class="websection">
    <h2>About me</h2>
    <img src={aboutmeFace} alt="Simon about me face">
    <p>
      Hello, I'm Simon and my online alias is simonknowsstuff. I like to make cool things and share them with the world!
    </p>
    <p>
      My interests include programming, music production, and pixel art. Check around this website to see cool stuff!
    </p>
  </div>
  <div id="projects" class="websection">
    <h2>Projects</h2>
    <Projects />
  </div>
  <div id="socials" class="websection">
    <h3>Socials</h3>
    <p>You can also find me here!</p>
    <Socials />
  </div>
  <footer id="footer">
    <p>Made by simonknowsstuff in Svelte with 💚</p>
  </footer>
</main>