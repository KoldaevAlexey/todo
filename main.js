const addTaskBtn = document.querySelector(".add-btn");
const todosWrapper = document.querySelector(".todos-wrapper");
const taskDescriptionInput = document.querySelector(".todos-description");
const deleteTodos = document.querySelector(".btn-delete");

var idTodos = 0;

const addTask = () => {
  return `
    <div class="todo-item" onclick="completeTask(event)" id="${idTodos}">
        <div class="description">${taskDescriptionInput.value}</div>
        <div class="buttons">
            <input  "class="btn-complete" type="checkbox">
            <button class="btn-delete"  onclick="deleteTask(event) "id="${idTodos}" >Delete</button>
        </div>
    </div>
    `;
};

const newElement = () => {
  taskDescriptionInput.value == ""
    ? alert("Поле не должно быть пустым!")
    : (todosWrapper.innerHTML += addTask(idTodos));
  taskDescriptionInput.value = "";
  idTodos++;
};

const deleteTask = (event) => {
  document.getElementById(event.target.id).remove();
};
