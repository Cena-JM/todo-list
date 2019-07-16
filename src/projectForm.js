import { addProject } from './projectFactory';
import { renderProjects } from './renderProjects';

const projectForm = () => {
  const formContainer = document.querySelector('.projects');

  const form = document.createElement('form');
  form.setAttribute('id', 'new-project-form');

  const projectTitle = document.createElement('input');
  projectTitle.setAttribute('type', 'text');
  projectTitle.setAttribute('id', 'project-title');
  projectTitle.setAttribute('placeholder', 'Create new project');
  projectTitle.classList.add('project-title');


  const submit = document.createElement('input');
  submit.classList.add('project-btn')
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'submit');

  form.appendChild(projectTitle);
  form.appendChild(submit);

  formContainer.appendChild(form);
  const projectsHead = document.createElement("h3");
  projectsHead.classList.add("projects-head");
  projectsHead.innerHTML = `Projects`;
  formContainer.appendChild(projectsHead);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject(projectTitle.value);
    renderProjects();
  })

}

export { projectForm }