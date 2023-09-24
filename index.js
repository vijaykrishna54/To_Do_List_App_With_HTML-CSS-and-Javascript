// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Event listener for adding a new task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

        // Add event listener for deleting the task
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });
    }
});

// Event listener for adding a new task when Enter key is pressed
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});
