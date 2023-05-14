import express from "express";
import * as controller from "../controllers/projects.controllers.js";

const route = express.Router();

route.get('/proyectos', controller.getProjects);
route.get('/proyectos/:sectionParam', controller.getProjectsbySection);


export default route;


