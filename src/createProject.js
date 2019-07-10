const createProject = (title) => {
    const todoItem = document.createElement("div");
    projectItem.classList.add("project-item");

    projectItem.innerHTML = `
                            <p class="Title">
                                ${title}
                            </p>
                            <span>🗑</span>`;
    return projectItem;
}

export { createProject }