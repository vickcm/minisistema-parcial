function createPage(title, content) {
  let html;

  html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
  html += '<link rel="stylesheet" href="/css/styles.css">';
  html += '<link rel="stylesheet" href="/css/bootstrap.min.css">';

  html += "<title>" + title + "</title></head><body>";

  html += `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-uppercase fs-6 text-secondary fw-bold" href="#">Proyectos</a>
   

      <ul class="navbar-nav">
       
        <li class="nav-item">
          <a class="nav-link" href="/proyectos/mobile">Mobile </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/proyectos/landing">LandingPage </a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="/proyectos/webapp">Web App</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/proyectos/ecommerce">e-Commerce</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/proyectos/game">Games</a>
        </li>
      </ul>
    </div>
  
</nav>`;

  html += content;
  html += `
  <footer class="bg-body-tertiary text-center py-3 mt-5">
    <p class="text-secondary mb-0">&copy; 2023 - Aplicaciones Híbridas - Victoria Castro Menna</p>
  </footer>
`;
  html += "</body> </html>";

  return html;
}


function isValidObjectId(id) {
  const objectIdRegex = /^[a-f\d]{24}$/i;
  return objectIdRegex.test(id);
}

export { createPage, isValidObjectId };
