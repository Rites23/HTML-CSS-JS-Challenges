document.getElementById("add-task").addEventListener("click", addTask);
document
  .getElementById("task-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
  });

window.onload = function () {
  loadTasks();
};

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const tasks = getTasksFromLocalStorage();
  tasks.push(taskText);
  saveTasksToLocalStorage(tasks);

  taskInput.value = "";
  loadTasks();
}

function deleteTask(index) {
  const tasks = getTasksFromLocalStorage();
  tasks.splice(index, 1);
  saveTasksToLocalStorage(tasks);
  loadTasks();
}

function editTask(index) {
  const newTaskText = prompt("Edit your task:");
  if (newTaskText !== null && newTaskText.trim() !== "") {
    const tasks = getTasksFromLocalStorage();
    tasks[index] = newTaskText;
    saveTasksToLocalStorage(tasks);
    loadTasks();
  }
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear existing list

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTask(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    listItem.appendChild(taskSpan);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);
  });
}

function getTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  return tasks ? tasks : [];
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
