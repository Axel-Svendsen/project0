const template = document.createElement('template');

template.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/index.html">Home<span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/game.html">Game<span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/about.html">Hur spelar man?   <span class="sr-only"></span></a>
      </li>
    </ul>
  </div>
</nav>
`;

document.body.appendChild(template.content);