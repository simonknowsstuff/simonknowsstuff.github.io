<script>
  import bookImg from '/src/assets/images/book.gif';
</script>

<style>
  .card {
    width: 200px;
    height: 200px;
    text-align: center;
    border-radius: 10px;
    background-color: var(--teal-blue);
    justify-content: center;
    align: center;
    word-break: break-word;
    padding: 10px;
  }

  .card a {
    color: var(--arylide-yellow);
  }

  #card-container {
    display: flex;
    align-self: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    padding: 5px;
    padding-bottom: 10px;
  }

  #card-container button {
    align-self: end;
  }

  /* Github style button CSS */
  /* source: https://getcssscan.com/css-buttons-examples */
  .github_btn {
    appearance: none;
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
  }

  .github_btn:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }

  .github_btn:hover {
    background-color: #2c974b;
  }

  .github_btn:focus {
    box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
    outline: none;
  }

  .github_btn:disabled {
    background-color: #94d3a2;
    border-color: rgba(27, 31, 35, .1);
    color: rgba(255, 255, 255, .8);
    cursor: default;
  }

  .github_btn:active {
    background-color: #298e46;
    box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
  }
  /* button end */

</style>

<main>
  <img src={bookImg} alt="Image of a book">
  <p>These are a few of my projects I've been working / worked on. </p>
  <div id="card-container">
    <div class="card">
      <h3>Salsa</h3>
      <p>An automatic web-hosted static site generator made in python using flask in development.</p>
      <input type="button" onclick="javascript:window.open('https://github.com/simonknowsstuff/salsa', '_blank');" class="github_btn" value="Github" />
    </div>
    <div class="card">
      <h3>Godot Film Maker</h3>
      <p>Godot Film Maker is an addon for the Godot Engine to create video files out of your project made in Godot.</p>
      <input type="button" onclick="javascript:window.open('https://github.com/simonknowsstuff/Godot-Film-Maker', '_blank');" class="github_btn" value="Github" />
    </div>
    <div class="card">
      <h3>Music Visualiser</h3>
      <p>This is a music visualiser made in Godot in its 3D workspace. Collaboration with <a href="https://github.com/Technohacker" target="_blank">Technohacker.</a>
      </p>
      <input type="button" onclick="javascript:window.open('https://github.com/Technohacker/GodotMusicVis', '_blank');" class="github_btn" value="Github" />
    </div>
    <div class="card">
      <h3>Simple Twitter CLI</h3>
      <p>A project that makes use of the Twitter API which I made as a beginner. Collaboration with <a href="https://github.com/clima-dev/" target="_blank">Clima.</a>
      </p>
      <input type="button" onclick="javascript:window.open('https://github.com/Technohacker/GodotMusicVis', '_blank');" class="github_btn" value="Github" />
    </div>
  </div>
  <p>You can also find my other github projects here.</p>
  <input type="button" onclick="javascript:window.open('https://github.com/simonknowsstuff?tab=repositories', '_blank');" class="github_btn" value="My repositories" />
</main>
