
import "./styles/reset.css";
import "./styles/style.css";
import { renderProjects } from "./renderProjects";
import { projectForm } from "./projectForm";
import { todoForm } from "./todoForm";
import { renderTodos } from "./renderTodos";
import { projectFactory } from "./projectFactory";
import { todoFactory } from './todoFactory';
import { getData, setData } from "./storage";

let projects;

if (getData()) {
    projects = getData();
  } else {
    // else create a default starting list:
    const defaultToDo = todoFactory('Sample task', 'Give feedback to developer',  '2019-12-01', 'Low');
    const defaultProject = projectFactory('My Project', [defaultToDo]);
    projects = [defaultProject];
    setData(projects);
  }



const render = () => {
    projectForm();
    todoForm();
    renderProjects();
    renderTodos(0);
}

render();

export { projects }