import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");

async function getProjects(filter = {}) {
  try {
    await client.connect();

    const filterMongo = {};
    if (filter.section) {
      filterMongo.section = { $regex: filter.section, $options: "i" };
    }
    if (filter.technologies) {
      filterMongo.technologies = { $regex: filter.technologies, $options: "i" };
    }
    return db.collection("Projects").find(filterMongo).toArray();
  } catch (err) {
    throw err;
  }
}

async function getProjectsbySection(section) {
  try {
    await client.connect();
    return db.collection("Projects").find({ section: section }).toArray();
  } catch (err) {
    throw err;
  }
}

async function createProject(project) {
  try {
    await client.connect();
    await db.collection("Projects").insertOne(project);
    return project;
  } catch (err) {
    throw err;
  }
}

async function addProjectsClientsProjects(project) {
  const clientsProjects = await db.collection("Clients-Projects");
  const existingClientProject = await clientsProjects.findOne({
    clientId: new ObjectId(project.clientId),
  });

  if (existingClientProject) {
    // Si ya existe un documento con el clientId, actualizar la información
    await clientsProjects.updateOne(
      { clientId: new ObjectId(project.clientId) },
      { $push: { projects: project } }
    );
  } else {
    // Si no existe un documento con el clientId, crear uno nuevo
    await clientsProjects.insertOne({
      clientId: new ObjectId(project.clientId),
      projects: [project],
    });
  }
}

async function getProjectById(idProject) {
  try {
    await client.connect();

    const filterMongo = { _id: new ObjectId(idProject) };

    return db.collection("Projects").findOne(filterMongo);
  } catch (err) {
    throw err;
  }
}

async function updateProject(idProject, projectUpdate) {
  try {
    await client.connect();

    await db
      .collection("Projects")
      .updateOne({ _id: new ObjectId(idProject) }, { $set: projectUpdate });

    const projectNew = await db
      .collection("Projects")
      .findOne({ _id: new ObjectId(idProject) });

    return updateProjectsClientsProjects(idProject, projectNew);
  } catch (err) {
    throw err;
  }
}

// actualizo el proyecto en la colección "Clients-Projects"

async function updateProjectsClientsProjects(idProject, projectNew) {
  try {
    const clientsProjects = await db.collection("Clients-Projects");
    const existingClientProject = await clientsProjects.findOne({
      "projects._id": new ObjectId(idProject),
    });

    if (existingClientProject) {
      // Si ya existe un documento con el clientId, actualizar la información
      await clientsProjects.updateOne(
        { "projects._id": new ObjectId(idProject) },
        { $set: { "projects.$": projectNew } }
      );
    }

    return projectNew;
  } catch (err) {
    throw err;
  }
}

async function deleteProject(idProject) {
  try {
    await client.connect();
    // Obtener el ID del cliente y el índice del proyecto a borrar
    const filter = { "projects._id": new ObjectId(idProject) };
    const projection = { "projects.$": 1 };
    const result = await db
      .collection("Clients-Projects")
      .findOne(filter, projection);
    if (!result) {
      throw new Error("Proyecto no encontrado");
    }
    const projectIndex = result.projects.findIndex(
      (project) => project._id.toString() === idProject
    );
    const clientId = result.clientId.toString();

    // Eliminar el proyecto de la colección "Projects"
    await db.collection("Projects").deleteOne({ _id: new ObjectId(idProject) });

    // Eliminar el proyecto de la colección "Clients-Projects"
    await db
      .collection("Clients-Projects")
      .updateOne(
        { clientId: new ObjectId(clientId) },
        { $pull: { projects: { _id: new ObjectId(idProject) } } }
      );

    return {
      id: idProject,
    };
  } catch (err) {
    throw err;
  }
}

async function getProjectsByIds(projectsIds) {
  try {
    const filterMongo = { _id: { $in: projectsIds } };
    return db.collection("Projects").find(filterMongo).toArray();
  } catch (err) {
    throw err;
  }
}

export {
  getProjectsbySection,
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  getProjectsByIds,
  addProjectsClientsProjects,
};
