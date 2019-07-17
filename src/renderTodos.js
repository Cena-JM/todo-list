import { getprojectTodos, removeTodo, todoStatus } from "./todoFactory";
import { setData } from "./storage";
import { projects } from ".";

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

        const todoHead = document.createElement("div");
        todoHead.classList.add('todo-head');
        const todoBody = document.createElement("div");
        todoBody.classList.add('todo-body');
        todoBody.classList.add('hidden');

        const title = document.createElement('p');
        title.setAttribute('contenteditable', "true");
        title.classList.add('title');
        title.innerHTML = `${todo.title}`;
        crossTodotitle(todo.status, title)

        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.addEventListener('click', (e) => {
            crossTodo(e);
            crossTodotitle(todo.status, title);
        });
        (todo.status === 'true')? check.checked = false : check.checked = true;


        const del = document.createElement('span');
        del.innerHTML = '🗑';
        del.addEventListener('click', deleteTodo);

        const more = document.createElement('span');
        more.innerHTML = '<i class="fas fa-angle-down"></i>';

        const dueDate = document.createElement('span');
        dueDate.setAttribute('contenteditable', "true");
        dueDate.classList.add('todo-date');
        dueDate.innerHTML = `${todo.dueDate}`;
        todoBody.appendChild(dueDate);

        const priority = document.createElement('span');
        priority.classList.add('todo-priority');
        priority.innerHTML = `${todo.priority}`;
        todoBody.appendChild(priority);
        (todo.priority === 'low')? check.classList.add('low') : (todo.priority === 'medium')? check.classList.add('medium') : check.classList.add('high');

        const desc = document.createElement('p');
        desc.setAttribute('contenteditable', "true");
        desc.classList.add('todo-desc');
        desc.innerHTML = `${todo.description}`;
        todoBody.appendChild(desc);

        const edit = document.createElement('button');
        edit.innerHTML = `<i class="fas fa-edit"></i>`;
        edit.classList.add('edit-btn');
        todoBody.appendChild(edit);


        // todoItem.appendChild(status);
        todoHead.appendChild(check);
        todoHead.appendChild(title);
        todoHead.appendChild(del);
        todoHead.appendChild(more);

        todoItem.appendChild(todoHead);
        todoItem.appendChild(todoBody);

        more.addEventListener('click', () => {
            todoBody.classList.toggle('hidden');
        });


        edit.addEventListener('click', () => {
            todo.title = title.innerHTML;
            todo.description = desc.innerHTML;
            todo.dueDate = dueDate.innerHTML;
            setData(projects);
        })

        todoContainer.appendChild(todoItem);
    });
}

const deleteTodo = (e) => {
    let el = e.target;
    let elParent = el.parentElement.parentElement;
    let id = elParent.getAttribute('data-todo');
    let project = document.getElementById('project-id');
    let projectId = project.value;
    let parent = document.getElementById('project-todos');
    parent.removeChild(elParent);
    removeTodo(id, projectId);
}

const crossTodo = (e) => {
    let el = e.target;
    let elParent = el.parentElement.parentElement;
    let id = elParent.getAttribute('data-todo');
    let project = document.getElementById('project-id');
    let projectId = project.value;
    todoStatus(id, projectId);
}

const crossTodotitle = (bool, el) => {
    if(bool === 'true'){
        el.classList.remove('crossed')
    }else{
        el.classList.add('crossed')
    }
}


export { renderTodos }