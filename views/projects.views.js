import { createPage } from "../pages/utils.js";

function createProjectListPage(projects, allProjects = false) {
  
  const sectionName = allProjects ? "Todos los proyectos" : projects.length > 0 ? projects[0].section : "";

  const projectItems = projects
    .map(
      (project) => `
    <li class="list-group-item bg-light my-2 p-3 shadow-sm">
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0 me-3">
          <img src="${project.img}" alt="${project.name}" class="img-thumbnail">
        </div>
        <div>
          <h2 class="mb-1">${project.name}</h2>
          <p class="mb-2 text-primary fw-semibold">${project.section}</p>

          <p class="mb-2">${project.description}</p>
          <ul class="list-group list-group-horizontal mb-2">
          ${project.technologies
        .map((tech) => `<li class="list-group-item">${tech}</li>`)
        .join("")}

    </ul>
          <a class="btn btn-primary d-block" href="${
            project.link
          }" target="_blank">Ver</a>
        </div>
      </div>
    </li>
  `
    )
    .join("");

  const message =
    projects.length === 0 ? "No hay proyectos para esta sección" : "";

  const html = `
    <div class="mx-auto col-md-6 mt-4">
      <h1 class="fw-bold text-secondary fs-4 text-center mt-3">
        Lista de proyectos de la sección: <span class="text-primary">${sectionName}</span>
      </h1>
      <ul class="list-group align-items-end">${projectItems}</ul>
      <p class="text-center text-danger">${message}</p>
    </div>
  `;

  return createPage("Proyectos", html);
}





export { createProjectListPage, createPage };
