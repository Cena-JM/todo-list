import { getprojectTodos } from "./todoFactory";
import { createTodo } from "./createTodo";

const renderTodo = (projectId) => {
    const todoContainer = document.querySelector("#projectTodos");
    let todo;
    for (todo of getprojectTodos(projectId)){
        todoContainer.appendChild(createTodo(todo.title));
    }
    return todoContainer
}

export { renderTodo }