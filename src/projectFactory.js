import { getData, setData } from "./storage";
import { todoFactory } from "./todoFactory";

const projectFactory = (title) => {
  let todos = [];
  return { title, todos }
}
const setDefaultProject = () => {
  const defaultToDo = todoFactory('Sample task', 'Give feedback to developer',  '2019-12-01', 'Low');
  const defaultProject = projectFactory('My Project', [defaultToDo]);
  const projects = [defaultProject];
  if (getData() === null) {
    setData(projects);
  }
};

const addProject = (title) => {
  const project = projectFactory(title);
  const projects = getData();
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

const getProjects = () => {
  let projects = getData();
  return projects
}

export { 
  setDefaultProject,
  addProject,
  removeProject,
  getProject,
  getProjects
}