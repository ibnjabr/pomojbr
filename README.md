⏱️ Pomojabr (Focus Timer & To-Do List)
A retro pixel-styled productivity dashboard that combines a customizable Pomodoro Focus Timer with a dynamic To-Do List. Built with a vibrant cyberpunk neon aesthetic, featuring glowing animations and responsive layouts for both desktop and mobile users.

This is my very 1st JavaScript project, built to master DOM manipulation, browser events, asynchronous intervals, and array data handling.

Features
Customizable Focus Timer: A pixelated countdown timer with sound notifications (click effects and completion alarms). Users can input custom focus durations or fall back to the classic 25-minute default.

Dynamic To-Do List: Full CRUD-like capabilities for tasks (Add, toggle completion, and delete) powered by modern JavaScript array methods.

Retro Pixel & Neon UI: Powered by specialized Google Fonts (Press Start 2P, Pixelify Sans, and Handjet) combined with smooth glassmorphism, intense text-shadow glowing, and reactive hover transitions.

Interactive Audio Feedback: Immersive sound effects built via the HTML5 Audio API for button clicks and completion alerts.

Responsive Layout: Tailored media queries that scale down deep typography, massive grid displays, and responsive textareas to look flawless on mobile screens down to 600px.

Tech Stack
HTML5: Structures the semantic application view layout, containing the custom components and script structures.

CSS3: Built with design features such as CSS custom variables (:root), absolute centering via Flexbox, keyframe-like transition effects, and breakpoint media queries.

JavaScript (ES6+): Governs state management (todos arrays), timer algorithms using setInterval, state updates via structural rendering functions (renderTodos), and event delegation.

How to Run Locally
To test or modify this project locally on your system, execute these instructions:

Clone this repository to your local directory:
git clone https://github.com/YOUR_USERNAME/pomojabr.git

Open the main directory.

Launch index.html inside any web browser, or launch it through the VS Code Live Server extension for dynamic hot-reloading updates.

Development Highlights
Key programmatic solutions implemented within this release:

String Formatting: Handled time representation padding dynamically via String.padStart(2, "0") to guarantee a clean 00:00 display structure.

State Synchronicity: Engineered task state updates using mapping and filtering procedures (todos.map and todos.filter), followed by clean element flushing via todoList.innerHTML = "" before re-rendering.

Robust Audio Controls: Implemented .currentTime = 0 prior to calling .play() to allow immediate, rapid audio retriggers without lagging behind fast user clicks.

Credits
Made with passion and without ☕ by ibnJabr (https://github.com/ibnjabr)
