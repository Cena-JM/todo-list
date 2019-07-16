import { setData } from './storage'
import { projects } from './index'
import { getProject } from './projectFactory';

const todoFactory = (status, title, description, dueDate, priority) => ({
  status,
  title,
  description,
  dueDate,
  priority
});

const addTodo = (todo, projectId) => {
  let ourProject = getProject(projectId);
  ourProject.todos.push(todo);
  setData(projects);
}

const removeTodo = (todoId, projectId) => {
  let todos = projects[projectId].todos;
  todos.splice(todoId, 1);
  setData(projects);
}

const todoStatus = (todoId, projectId) => {
  let todos = projects[projectId].todos;
  let curTodo = todos[todoId];
  if (curTodo['status'] === 'true'){
    curTodo['status'] = 'false';
  }else {
    curTodo['status'] = 'true';
  }
  setData(projects);
}

const getprojectTodos = (projectId) => {
  let todos = projects[projectId].todos;
  return todos;
}


export { todoFactory, addTodo, removeTodo, todoStatus, getprojectTodos }

