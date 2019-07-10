import { getData, setData } from "./storage";

const projectFactory = (title) => {
  let todos = [];
  return { title, todos }
}

const addProject = (title) => {
  let project = projectFactory(title);
  let projects = getData();
  projects.push(project);
  setData(projects);
}

const removeProject = (id) => {
  let projects = getData();
  projects.splice(id, 1);
  setData(projects);
}

const getProject = (id) => {
  let projects = getData();
  let project = projects[id];
  return { project }
}


export { 
  addProject,
  removeProject,
  getProject
}