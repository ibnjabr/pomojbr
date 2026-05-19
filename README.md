# 🎯 Pomojbr: Pixel-Aesthetic Pomodoro Timer & To-Do List

A sleek, responsive, and highly interactive productivity web application that blends a customizable **Pomodoro Focus Timer** with a dynamic **To-Do List**. Built using custom fonts and a modern neon dark-mode style, this application helps users effectively manage tasks, maintain deep focus, and tracks productivity across all device sizes.

🚀 **Live Demo:** `[https://ibnjabr.github.io/pomojbr/]`

---

## ✨ Features

### ⏱️ Custom Pomodoro Focus Timer
* **Strict Input Shielding:** Features an airtight verification loop (`while` condition) that safely filters the initial prompt values. It blocks empty fields, negative inputs, canceled windows, and alphabet characters, completely safeguarding the interface against `NaN:NaN` rendering bugs.
* **Audio-Enhanced Feedback:** Integrated native HTML5 Audio API to play immersive sound effects on every user action (Start, Pause, Reset), along with an explicit alarm when the timer hits zero.
* **Smart Reset Logic:** Clicking the Reset button reverts the timer back to the user's initial configuration preference safely without forcing a sudden automatic countdown trigger.

### 📝 Dynamic & Fluid To-Do List
* **Clean DOM Manipulation:** Tasks are dynamically populated and managed through a unified internal state array, keeping the user interface completely isolated from heavy HTML clutter.
* **Event Delegation Architecture:** Employs optimized event listeners attached directly to parent nodes to seamlessly catch checkbox modifications (Task Completion) and instant removals without performance overhead.
* **Stylized Completion System:** Completed tasks automatically transition through specific CSS state triggers, adding neat strike-through decorations and dimming properties for visual tracking.

### 📱 Fully Responsive Neon Design
* **Glassmorphism Aesthetic:** Utilizes advanced CSS variables, glowing drop shadows, pixel-art fonts, and customized scrollbars to capture a true retro-cyber terminal feel.
* **Mobile-First Layout Adaptations:** Armed with dynamic viewport scalability (`CSS Flexbox`) and Media Queries, making it adapt fluidly on micro smartphone screens up to high-resolution desktop environments.

---

## 🛠️ Tech Stack Used

* **Structure:** Semantic HTML5 Markup.
* **Styles:** CSS3 (Custom Properties/Variables, Flexbox Architecture, Glassmorphic effects, Media Queries).
* **Logic:** Modern JavaScript (ES6+), Web Audio API, input sanitation loops, and runtime component re-rendering.

---

## 📂 Project Structure

```text
├── index.html       # Application core interface skeleton
├── style.css        # Theme configurations and viewports scaling layout
├── script.js        # Timer intervals, validation loops, and task engine
├── pomo.png         # Project Favicon icon asset
├── click.mp3        # Click interaction audio asset
└── alarm.mp3        # Focus session completion sound asset

```

---

## ⚙️ Key Code Implementations

1. **Airtight Inputs Loop:**
```javascript
while (timeFromUser === null || timeFromUser.trim() === "" || Number(timeFromUser) <= 0 || isNaN(Number(timeFromUser))) {
    timeFromUser = prompt("Invalid Input! Please enter a valid number greater than 0:");
}

```


2. **Flexible Responsive Scaling:**
```css
@media (max-width: 600px) {
    .pomodoro-card, .todo-card {
        width: 100% !important;
        max-width: 100%;
        padding: 1rem; 
    }
}

```



---

## 📸 Author

Proudly designed and engineered with clean code architecture by **ibnJabr** 💻.
*Feel free to fork this project, open issues, or drop a star ⭐ if you find it helpful!*

```
