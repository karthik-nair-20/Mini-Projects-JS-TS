document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    renderTasks(task);
  });

  addTodoButton.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text === "") return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    tasks.push(newTask);
    todoInput.value = "";
    console.log(tasks);
    saveTasks();
    renderTasks(newTask);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
  `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
       }
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    })
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter(t => t.id !== task.id);
      todoList.removeChild(li);
      saveTasks();
    });
    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
})