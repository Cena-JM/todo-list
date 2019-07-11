const createProject = (title) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.setAttribute("data-index", idx);

    projectItem.innerHTML = `
                            <p class="Title">
                                ${title}
                            </p>
                            <span>🗑</span>`;
    return projectItem;
}

export { createProject }