import * as service from "../../services/clients.services.js";
import { isValidObjectId } from "../../pages/utils.js";

function createClient(req, res) {
  const client = {
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    projects: req.body.projects,
  };
  console.log(client);
  service.createClient(client).then(function (client) {
    res.status(201).json(client);
  });
}

function getClients(req, res) {
  const filter = req.query;
  service.getClients(filter).then(function (clients) {
    res.status(200).json(clients);
  });
}

function getClientById(req, res) {
  const idClient = req.params.idClient;
  if (!isValidObjectId(idClient)) {
    return res.status(400).json({ message: "El ID del cliente no es válido" });
  }

  service
    .getClientById(idClient)
    .then(function (client) {
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ message: "Cliente no encontrado" });
      }
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el cliente" });
    });
}

function addProjectToClient(req, res) {
  const idClient = req.params.idClient;
  const idProject = req.params.idProject;

  if (!isValidObjectId(idClient)) {
    return res.status(400).json({ message: "El ID del cliente no es válido" });
  }
  console.log(idClient, idProject);
  service.addProjectToClient(idClient, idProject).then(function (result) {
    if (result) {
      res.status(200).json({ message: "Proyecto agregado al cliente" });
    } else {
      res.status(404).json({ message: "Cliente o proyecto no encontrado" });
    }
  });
}

function getProjectsByClient(req, res) {
  const idClient = req.params.idClient;

  if (!isValidObjectId(idClient)) {
    return res.status(400).json({ message: "El ID del cliente no es válido" });
  }

  service
    .getProjectsByClient(idClient)
    .then(function (projects) {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(200).json({ idClient: idClient, projects: [] })

      }
    })
    .catch(function (err) {
      res.status(500).json({
        message: "Ocurrió un error al obtener los proyectos del cliente",
      });
    });
}

export {
  createClient,
  getClients,
  getClientById,
  addProjectToClient,
  getProjectsByClient,
};
