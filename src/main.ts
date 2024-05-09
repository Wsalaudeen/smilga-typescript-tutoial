import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import "./tutorial.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="/tasks" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/tasks" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const taskForm = document.querySelector<HTMLFormElement>(".form");

const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    //add task to list
    addTask(task);
    //render tasks
    renderTask(task);

    // update local storage
    updateStorage();
    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
});

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  //checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  //toogle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
