import express from "express";
import ProjectsRoute from "./routes/projects.routes.js";
import ProjectsRouteApi from "./api/routes/projects.api.routes.js";
import ClientsRouteApi from "./api/routes/clients.api.routes.js";

const app = express(); // el server

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use("/", express.static("public")); 

app.use(ProjectsRoute); 
app.use('/api', ProjectsRouteApi); 
app.use('/api', ClientsRouteApi);

app.listen(2222, function () {
  // levantar el servidor
  console.log("Servidor levantado! http://localhost:2222");
});
