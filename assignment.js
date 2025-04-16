const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

addTodoBtn.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    todos.push(todoText);
    saveTodos();
    renderTodos();
    todoInput.value = '';
  }
});

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
      ${todo}
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    todoList.appendChild(todoItem);
  });
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const index = parseInt(e.target.dataset.index);
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }
});

renderTodos();
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
      <span style="color: white">${todo}</span>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    todoList.appendChild(todoItem);
  });
}
