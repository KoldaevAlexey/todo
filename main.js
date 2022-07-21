const addTaskBtn = document.querySelector(".add-btn"),
  todosWrapper = document.querySelector(".todos-wrapper"),
  taskDescriptionInput = document.querySelector(".todos-description"),
  deleteTodos = document.querySelector(".btn-delete"),
  chbox = document.getElementsByClassName(".btn-complete");

const tasks = ["поесть"];

function addTask() {
  tasks.forEach((task, key) => {
    localStorage.setItem(key, task);
  });
}

function updateTasks() {
  //todo
}

function deleteTask() {
  //todo
}

addTaskBtn.addEventListener("click", () => {
  tasks.push(taskDescriptionInput.value);
  addTask(tasks);
});
