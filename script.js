let fetchingtime = document.querySelector(".user-time");

let timeLeft = 0;
let timerInterval = null;

const timer = document.querySelector(".time-display");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const allButtons = document.querySelectorAll(".pomodoro-card button");

const clickSound = new Audio("click.mp3");
const alarmSound = new Audio("alarm.mp3");

updateDisplay = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let minString = String(minutes).padStart(2, "0");
  let secString = String(seconds).padStart(2, "0");

  timer.textContent = `${minString}:${secString}`;

  if (timerInterval !== null) {
    document.title = `(${minString}:${secString}) PomoJabr`;
  } else {
    document.title = "PomoJabr";
  }
};

updateDisplay();

const startTimer = () => {
  if (timerInterval !== null) return;

  if (timeLeft === 0) {
    let timeFromUser = Math.abs(fetchingtime.value);
    let minutesInput = Number(timeFromUser) || 25;
    timeLeft = minutesInput * 60;
  }

  const startTime = Date.now();
  const endTime = startTime + timeLeft * 1000;

  timerInterval = setInterval(() => {
    const now = Date.now();
    const remainingTimeInMs = endTime - now;

    timeLeft = Math.ceil(remainingTimeInMs / 1000);

    if (timeLeft <= 0) {
      timeLeft = 0;
      updateDisplay();
      clearInterval(timerInterval);
      timerInterval = null;
      document.title = "Time's up! 🔔"; 
      alarmSound.currentTime = 0;
      alarmSound.play();
      alert("Take a rest! 🔔");
    } else {
      updateDisplay(); 
    }
  }, 1000);
};

pauseTimer = () => {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};

resetTimer = () => {
  pauseTimer();
  userTime = Math.abs(fetchingtime.value);
  timeLeft =  userTime * 60;
  updateDisplay();
};

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");

let todos = [];

const addTodo = () => {
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    const newTodo = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    clickSound.currentTime = 0;
    clickSound.play();
    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
  }
};
addBtn.addEventListener("click", addTodo);

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    if (todo.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
            <span>${todo.text}</span>
            <input type="checkbox" data-id="${todo.id}" ${todo.completed ? "checked" : ""}>
            <button class="delete-btn" data-id="${todo.id}">X</button>
        `;

    todoList.appendChild(li);
  });
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== Number(id));
  renderTodos();
};

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const todoId = e.target.getAttribute("data-id");
    deleteTodo(todoId);
    clickSound.currentTime = 0;
    clickSound.play();
  } else if (e.target.type === "checkbox") {
    const todoId = e.target.getAttribute("data-id");

    todos = todos.map((todo) => {
      if (todo.id === Number(todoId)) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    clickSound.currentTime = 0;
    clickSound.play();
    renderTodos();
  }
});
