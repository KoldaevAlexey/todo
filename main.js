const addTaskBtn = document.querySelector(".add-btn"),
  todosWrapper = document.querySelector(".todos-wrapper"),
  taskDescriptionInput = document.querySelector(".todos-description"),
  deleteTodos = document.querySelector(".dlt"),
  chbox = document.getElementsByClassName(".btn-complete");

let tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
  tasks = [];
}

renderTodoList();

function addTask(text) {
  const todo = {
    text,
    id: `${Math.random()}`,
    done: false,
  };
  tasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTodoList(text, todo.id);
}

function renderTodoList() {
  todosWrapper.innerHTML = "";

  tasks.forEach((task) => {
    let list = document.createElement("div");
    list.innerHTML = `
    <div id=${task.id}>
        ${task.text}
          <button class="dlt" onclick="deleteTask(${task.id})">delete</button>
          <input onclick="checkedTask(${task.id})" type="checkbox">
    </div>
  `;
    todosWrapper.append(list);
  });
}

function deleteTask(id) {
  tasks.forEach((task, index) => {
    if (task.id == id) {
      tasks.splice(index, 1);
    }
  });
  localStorage.clear();
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTodoList();
}

function checkedTask(id) {
  tasks.forEach((item) => {
    if (item.id == id) {
      item.done = !item.done;
      document.getElementById(`${id}`).classList.toggle("checked");
    }
  });
}

addTaskBtn.addEventListener("click", () => {
  let text = taskDescriptionInput.value;

  addTask(text);
});
