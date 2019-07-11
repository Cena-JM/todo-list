
import { getProjects, removeProject } from "./projectFactory";
import { renderTodos } from "./renderTodos";

const renderProjects = () => {
    let projects = getProjects();
    const projectsContainer = document.querySelector(".projects");
    projects.forEach((project, idx) => {
        const projectItem = document.createElement("div");
        projectsContainer.appendChild(projectItem);

        projectItem.classList.add("project-item");
        projectItem.setAttribute("data-index", idx);

        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = `${project.title}`;

        const remove = document.createElement('span');
        remove.innerHTML = '🗑';

        projectItem.appendChild(title);
        projectItem.appendChild(remove);
        
        projectItem.addEventListener('click', (e) => {
            e.preventDefault();
            setProjectId(idx);
            renderTodos(idx);
        })

        remove.addEventListener('click', removeProject(idx));

    });
}

const setProjectId = (id) => {
    const projectIdField = document.querySelector('#project-id');
    projectIdField.setAttribute('value', id);
}

export { renderProjects }