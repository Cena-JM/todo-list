const createTodo = (title) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    todoItem.innerHTML = `
                            <input type="checkbox">
                            <p class="Title">
                                ${title}
                            </p>
                            <span>🗑</span>
                            <span>Edit</span>`;
    return todoItem;
}

export { createTodo }