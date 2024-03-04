const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const taskList = document.getElementById("task-list");
const todoContainer = document.querySelector(".flex-col");
const taskList2 = document.getElementById("task-list-2");
const todoContainer2 = document.querySelectorAll(".flex-col")[1];

window.addEventListener("load", function() {
    // Retrieve items from local storage
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      // If there are saved tasks, populate both divs
      taskList.innerHTML = savedTasks;
      taskList2.innerHTML = savedTasks;
    }
  });
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskText = input.value.trim();
    console.log(taskText);
    if (taskText !== "") {
      const li = document.createElement("li");
      li.classList.add("mb-4");
      li.innerHTML = `<input class="ml-6" type="checkbox">
          <span class="w-72">${taskText}</span>
          <button class="bg-blue-600 border-2 rounded-md w-16 px-2 py-2 text-white font-Vollkorn">Delete</button>
          `;
      taskList.appendChild(li);
      input.value = "";
      todoContainer.style.height = `${todoContainer.scrollHeight}px`;
      taskList2.appendChild(li.cloneNode(true));
      
      // Save tasks to local storage
      localStorage.setItem("tasks", taskList.innerHTML);
    }
  });
  
  taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      const liToRemove = event.target.parentElement;
      const liIndex = Array.from(taskList.children).indexOf(liToRemove);
      liToRemove.remove();
      taskList2.children[liIndex].remove();
      
      // Save tasks to local storage
      localStorage.setItem("tasks", taskList.innerHTML);
    } else if (event.target.tagName === "INPUT") {
      const liToUpdate = event.target.parentElement;
      liToUpdate.style.textDecoration = "line-through";
      // Reflect event in second div
      const liIndex = Array.from(taskList.children).indexOf(liToUpdate);
      taskList2.children[liIndex].style.textDecoration = "line-through";
      
      // Save tasks to local storage
      localStorage.setItem("tasks", taskList.innerHTML);
    }
  });
// window.addEventListener("load", function() {
//     if (taskList2.children.length > 0) {
//       // If there are items in the second div, clone and populate the first div
//       Array.from(taskList2.children).forEach(function(item) {
//         taskList.appendChild(item.cloneNode(true));
//       });
//     }
//   });
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const taskText = input.value.trim();
//   console.log(taskText);
//   if (taskText !== "") {
//     const li = document.createElement("li");
//     li.classList.add("mb-4");
//     li.innerHTML = `<input class="ml-6" type="checkbox">
//         <span class="w-72">${taskText}</span>
//         <button class="bg-blue-600 border-2 rounded-md w-16 px-2 py-2 text-white font-Vollkorn">Delete</button>
//         `;
//     taskList.appendChild(li);
//     input.value = "";
//     todoContainer.style.height = `${todoContainer.scrollHeight}px`;
//     taskList2.appendChild(li.cloneNode(true));
//   }
// });
// taskList.addEventListener("click", function (event) {
//   if (event.target.tagName === "BUTTON") {
//     const liToRemove = event.target.parentElement;
//     const liIndex = Array.from(taskList.children).indexOf(liToRemove);
//     liToRemove.remove();
//     taskList2.children[liIndex].remove();
//   } else if (event.target.tagName === "INPUT") {
//     const liToUpdate = event.target.parentElement;
//     liToUpdate.style.textDecoration = "line-through";
//     // Reflect event in second div
//     const liIndex = Array.from(taskList.children).indexOf(liToUpdate);
//     taskList2.children[liIndex].style.textDecoration = "line-through";
//   }
// });