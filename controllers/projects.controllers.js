import * as service from "../services/projects.services.js";
import * as view from "../views/projects.views.js";

function getProjects(req, res) {
  service.getProjects({ deleted: true }).then(function (projects) {
    res.send(view.createProjectListPage(projects, true));
  });
}

function getProjectsbySection(req, res) {
  let sectionParam = req.params.sectionParam; 
  console.log(sectionParam);
  service.getProjectsbySection(sectionParam).then(function (projects) {

    if (projects.length > 0) {
      res.send(view.createProjectListPage(projects));
    } else {
      res.send(
        view.createPage(
          "Error",
          '<p class="ms-5 pt-5 text-danger fs-bold"> Sección no encontrada</p>'
        )
      );
    }
  });
}

export { getProjectsbySection, getProjects };
