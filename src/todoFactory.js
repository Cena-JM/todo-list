import { getData, setData } from './storage'

const todoFactory = (title, description, dueDate, priority, check) => ({
  title,
  description,
  dueDate,
  priority,
  check
});

const addTodo = (todo, projectId) => {
  const projects = getData();
  let ourProject = null;
  projects.forEach((project, index) => {
    if (index === projectId) {
      ourProject = project;
    }
  });
  ourProject.todo.push(todo);
  setData(projects);
}

const removeTodo = (todoId, projectId) => {
  const projects = getData();
  let todos = projects[projectId].todos;
  todos.splice(todoId, 1);
  setData(projects);
}

export { todoFactory, addTodo, removeTodo }

