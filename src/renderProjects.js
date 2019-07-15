
import { getProject, removeProject } from "./projectFactory";
import { renderTodos } from "./renderTodos";
import { projects } from './index';
import { projectForm } from "./projectForm";


const renderProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    while(projectsContainer.firstChild){
        projectsContainer.removeChild(projectsContainer.firstChild);
    }
    initProject();
    projects.forEach((project, idx) => {
        const projectItem = document.createElement("div");

        projectItem.classList.add("project-item");
        projectItem.setAttribute("data-index", idx);

        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = `${project.title}`;

        const remove = document.createElement('div');
        remove.classList.add('delete-project');
        remove.innerHTML = '🗑';
        remove.addEventListener('click', deleteProject);

        projectItem.appendChild(title);
        projectItem.appendChild(remove);

        projectsContainer.appendChild(projectItem);
        
        projectItem.addEventListener('click', (e) => {
            e.preventDefault();
            setProjectId(idx);
            renderTodos(idx);
            setProjectName(getProject(idx).title);
        })
    });
}

const setProjectId = (id) => {
    const projectIdField = document.querySelector('#project-id');
    projectIdField.setAttribute('value', id);
}

const setProjectName = (title) => {
    const projectHeader = document.querySelector('#project-name');
    projectHeader.innerHTML = title;
}

const deleteProject = (e) => {
    let span = e.target;
    let parent = span.parentElement;
    let id = parent.getAttribute('data-index');
    let ul = document.querySelector(".projects");
    ul.removeChild(parent);
    removeProject(id);
}

const initProject = () => {
    projectForm();
    setProjectId(0);
    setProjectName(projects[0].title);
}

export { renderProjects }