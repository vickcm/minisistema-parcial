import * as service from "../../services/projects.services.js";
import { isValidObjectId } from "../../pages/utils.js";

function getProjects(req, res) {
  const filter = req.query;
  service.getProjects(filter).then(function (projects) {
    res.status(200).json(projects);
  });
}

function createProject(req, res) {
  
  const idClient = req.params.idClient;
  if (!isValidObjectId(idClient)) {
    return res.status(400).json({ message: "El ID del cliente no es válido" });
  }
  const project = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
    clientId: req.params.idClient


  };

  service.createProject(project)
  .then(function (project) {
    service.addProjectsClientsProjects(project).then(function() {
      res.status(201).json(project);
    });
  })
  .catch(function (error) {
    console.error(error);
    res.status(500).json({ message: "Ocurrió un error. Vuelva a intentarlo mas tarde" });
  });
}

function getProjectById(req, res) {
  const idProject = req.params.idProject;

  if (!isValidObjectId(idProject)) {
    return res.status(400).json({ message: "El ID del proyecto no es válido" });
  }
  service
    .getProjectById(idProject)
    .then(function (project) {
      if (project) {
        res.status(200).json(project);
      } else {
        console.log(idProject);

        res.status(404).json({ message: "Proyecto no encontrado" });
      }
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({ message: "Ocurrió un error. Vuelva a intentarlo mas tarde" });
    });
}

function updateProject(req, res) {
  const idProject = req.params.idProject;
  const projectUpdate = {};

  if (!isValidObjectId(idProject)) {
    return res.status(400).json({ message: "El ID del proyecto no es válido" });
  }

  if (req.body.name) {
    projectUpdate.name = req.body.name;
  }
  if (req.body.description) {
    projectUpdate.description = req.body.description;
  }
  if (req.body.link) {
    projectUpdate.link = req.body.link;
  }
  if (req.body.img) {
    projectUpdate.img = req.body.img;
  }
  if (req.body.technologies) {
    projectUpdate.technologies = req.body.technologies;
  }
  if (req.body.section) {
    projectUpdate.section = req.body.section;
  }

  if (req.body.clientId) {
    projectUpdate.clientId = req.body.clientId;
  }

  service
    .updateProject(idProject, projectUpdate)
    .then(function (projectUpdate) {
      if (projectUpdate) {
        res.status(200).json(projectUpdate);
      } else {
        res.status(404).json({ message: "Proyecto no encontrado" });
      }
    });
}

function deleteProject(req, res) {
  const idProject = req.params.idProject;
  if (!isValidObjectId(idProject)) {
    return res.status(400).json({ message: "El ID del proyecto no es válido" });
  }
  service.deleteProject(idProject).then(function (project) {
    if (project) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Proyecto no encontrado" });
    }
  });
}

export {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
};
