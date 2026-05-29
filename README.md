# ⏱️ PomoList

**PomoList** is a sleek and efficient productivity web application that combines a **Pomodoro Timer** for time management with a **To-Do List** to help users track and achieve their daily goals in one place.

---

## 🚀 Key Features

### 1. Pomodoro Timer
* **Customizable Time:** Set your own focus intervals or fall back on the classic 25-minute default.
* **Smart Controls:** Easily start, pause, and reset the timer. Supports the **Spacebar** hotkey to quickly play/pause.
* **Persistent Session:** Saves your custom time and remaining seconds using `LocalStorage` so you never lose progress on page refresh.
* **Audio Alerts & Notifications:** Plays an alarm sound (🔔) and triggers a browser alert when your focus session ends.
* **Tab Time-Tracking:** Dynamically displays the remaining time right inside the browser tab title.

### 2. To-Do List
* **Quick Add:** Add tasks effortlessly using the add button or by hitting the `Enter` key.
* **Task Editing (📝):** Edit existing tasks on the fly through an intuitive prompt mechanism.
* **Task Completion:** Mark tasks as completed with interactive checkboxes to visually cross them off.
* **Task Deletion:** Remove unwanted tasks instantly using the delete button (X).
* **Audio Feedback:** Enjoy responsive and satisfying click sound effects with every interaction.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the layout.
* **CSS3:** Clean styling and responsive design.
* **JavaScript (Vanilla JS):** Core application logic, DOM manipulation, and interval management.

---

## 💻 How It Works Under the Hood

* **Data-Driven Architecture:** Tasks are handled as an array of objects, keeping the UI perfectly synced with state changes.
* **Local Storage Sync:** Both the timer state and the To-Do list are serialized into `JSON` and preserved in the browser's local storage.
* **Accurate Timekeeping:** The timer utilizes `Date.now()` timestamp deltas rather than relying solely on loose intervals, preventing clock drift when the tab is in the background.

---
Developed with Coffe by M7mdJbr 