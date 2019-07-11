import _ from "lodash";
import "./styles/reset.css";
import "./styles/style.css";
import { renderProjects } from "./renderProjects";
import { renderTodo } from "./renderTodos";

const project = document.getElementsByClassName("project-item")

const render = () => {
    renderProjects()

    project.addEventListener("click", () => {
        renderTodo(projectId)
    })
}

render()