import express from "express";
import * as controller from "../controllers/projects.controllers.api.js";

const route = express.Router();

route.get('/proyectos', controller.getProjects);
route.get('/proyectos/:idProject', controller.getProjectById)
route.patch('/proyectos/:idProject', controller.updateProject)
route.delete('/proyectos/:idProject', controller.deleteProject)

export default route;

