import {  } from "./renderTodos";
import { getProjects } from "./projectFactory";

const renderProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    let project;
    for (project of getProjects()) {
        projectsContainer.appendChild(createProject(project.title));
    }
}

export { renderProjects }