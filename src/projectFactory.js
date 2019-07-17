import { getData, setData } from "./storage";
import { projects } from './index';

const projectFactory = (title) => {
  let todos = [];
  return { title, todos }
}

const addProject = (title) => {
  const project = projectFactory(title);
  projects.push(project);
  setData(projects);
}

const removeProject = (id) => {
  projects.splice(id, 1);
  setData(projects);
}

const getProject = (id) => {
  let project = projects[id];
  return project;
}

const getProjects = () => {
  let projects = getData();
  return projects
}

export { 
  projectFactory,
  addProject,
  removeProject,
  getProject,
  getProjects
}