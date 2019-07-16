import { getprojectTodos, removeTodo, todoStatus } from "./todoFactory";

const renderTodos = (projectId) => {
    const todoContainer = document.querySelector("#project-todos");
    while(todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.firstChild);
    }
    let todos = getprojectTodos(projectId);
    todos.forEach((todo, idx) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.setAttribute('data-todo', idx);


        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.addEventListener('click', crossTodo);

        const title = document.createElement('p');
        title.classList.add('title', 'crossed');
        title.innerHTML = `${todo.title}`;

        const del = document.createElement('span');
        del.innerHTML = '🗑';
        del.addEventListener('click', deleteTodo);

        const edit = document.createElement('span');
        edit.innerHTML = 'Edit';

        // todoItem.appendChild(status);
        todoItem.appendChild(check);
        todoItem.appendChild(title);
        todoItem.appendChild(del);
        todoItem.appendChild(edit);

        todoContainer.appendChild(todoItem);
    });
}

const deleteTodo = (e) => {
    let el = e.target;
    let elParent = el.parentElement;
    let id = elParent.getAttribute('data-todo');
    let project = document.getElementById('project-id');
    let projectId = project.value;
    let parent = document.getElementById('project-todos');
    parent.removeChild(elParent);
    removeTodo(id, projectId);
}

const crossTodo = (e) => {
    let el = e.target;
    let elParent = el.parentElement;
    let id = elParent.getAttribute('data-todo');
    let project = document.getElementById('project-id');
    let projectId = project.value;
    todoStatus(id, projectId);
}

export { renderTodos }