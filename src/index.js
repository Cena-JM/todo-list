
import "./styles/reset.css";
import "./styles/style.css";
import { renderProjects } from "./renderProjects";
import { projectForm } from "./projectForm";
import { todoForm } from "./todoForm";
import { renderTodos } from "./renderTodos";
import { setDefaultProject } from "./projectFactory";

const render = () => {
    setDefaultProject();
    projectForm();
    // todoForm();
    renderProjects();
    // renderTodos(0);
}

render();