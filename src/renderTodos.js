import { getprojectTodos } from "./todoFactory";

const renderTodos = (projectId) => {
    const todoContainer = document.querySelector("#projectTodos");
    let todos = getprojectTodos(projectId);
    todos.forEach((todo, idx) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.setAttribute('data-todo', idx);
        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = `${todo.title}`;
        const del = document.createElement('span');
        del.innerHTML = '🗑';
        const edit = document.createElement('span');
        edit.innerHTML = 'Edit';
        todoItem.appendChild(check);
        todoItem.appendChild(title);
        todoItem.appendChild(del);
        todoItem.appendChild(edit);
        todoContainer.appendChild(todoItem);
    });
}

export { renderTodos }