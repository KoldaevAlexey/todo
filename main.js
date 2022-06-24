const addTaskBtn = document.querySelector(".add-btn");
const todosWrapper = document.querySelector(".todos-wrapper");
const taskDescriptionInput = document.querySelector(".todos-description");
var deleteTodos = document.querySelector(".btn-delete");

var idTodos = 0;

const addTask = (id) => {
  return `
    <div class="todo-item" id="${id}">
        <div class="description">${taskDescriptionInput.value}</div>
        <div class="buttons">
            <button class="btn-delete" onclick="deleteElement()">Delete</button>
        </div>
    </div>
    `;
};

const newElement = () => {
  todosWrapper.innerHTML += addTask(idTodos);
  taskDescriptionInput.value = "";
  idTodos++;
};

const deleteElement = () => {
  alert("123");
};
