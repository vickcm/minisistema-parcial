import express from "express";
import * as controller from "../controllers/clients.controller.api.js";
import * as projectController from "../controllers/projects.controllers.api.js";


const route = express.Router();
route.get('/clientes', controller.getClients);
route.post('/clientes', controller.createClient);
route.get('/clientes/:idClient', controller.getClientById)
route.post('/clientes/:idClient/proyectos', projectController.createProject);
route.get('/clientes/:idClient/proyectos', controller.getProjectsByClient)

export default route;