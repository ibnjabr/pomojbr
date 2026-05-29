
let fetchingtime = document.querySelector(".user-time");

let customTime = localStorage.getItem("pomoCusTime");
let savedTimeLeft = localStorage.getItem("pomoTimeLeft");

let timeLeft = savedTimeLeft ? Number(savedTimeLeft) : (customTime ? Number(customTime) * 60 : 25 * 60);
let timerInterval = null;

if (customTime) fetchingtime.value = customTime;


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
    document.title = `(${minString}:${secString}) PomoList`;
  } else {
    document.title = "PomoList";
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

  let timeToSave = Number(fetchingtime.value) || 25;
  localStorage.setItem("pomoCusTime", timeToSave); 
  
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

      localStorage.removeItem("pomoTimeLeft");

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

  localStorage.setItem("pomoTimeLeft", timeLeft);
};

resetTimer = () => {
  pauseTimer();
  localStorage.removeItem("pomoTimeLeft");
  let userTime = Number(fetchingtime.value) || 25;

  localStorage.setItem("pomoCusTime", userTime);

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

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = () => {
  localStorage.setItem("todos",JSON.stringify(todos))
}

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
    saveTodos();
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
            <button class = 'edit-btn' id="${todo.id}"><i class="fa-solid fa-pen-to-square"></i></button>
        `;

    todoList.appendChild(li);
  });
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== Number(id));
  saveTodos();
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
    saveTodos()
    clickSound.currentTime = 0;
    clickSound.play();
    renderTodos();
  }

  else if (e.target.classList.contains("edit-btn")) {
    const todoId = e.target.id;
    clickSound.currentTime = 0;
    clickSound.play()
    editTask(e.target.id)
  }
});

const editTask = (id) => {
  const task = todos.find(todo => todo.id === Number(id));

  if (task) {
    console.log(task.text);
  }
  let newText = prompt("Editing task!", task.text);

  if (newText && newText.trim !== "") {
    task.text = newText.trim();
    saveTodos()
    renderTodos()
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    
    if (document.activeElement === todoInput || document.activeElement === fetchingtime) {
      return; 
    }

    e.preventDefault();

    clickSound.currentTime = 0;
    clickSound.play();

    if (timerInterval !== null) {
      pauseTimer();
    } else {
      startTimer();
    }
  }
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    
    e.preventDefault(); 
    
    addTodo(); 
  }
});

renderTodos();
