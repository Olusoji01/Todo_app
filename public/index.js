const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');
const todoContainer = document.querySelector('.flex-col');


form.addEventListener('submit', function(event){
    event.preventDefault();
    const taskText = input.value.trim();
    console.log(taskText);
    if(taskText !== '')
    {
        const li = document.createElement('li');
        li.classList.add('mb-4');
        li.innerHTML = `<input class="ml-6" type="checkbox">
        <span class="w-72">${taskText}</span>
        <button class="bg-blue-600 border-2 rounded-md w-16 px-2 py-2 text-white font-Vollkorn">Delete</button>
        `;
        taskList.appendChild(li);
        input.value = '';
        todoContainer.style.height = `${todoContainer.scrollHeight}px`;
    }
});
taskList.addEventListener('click', function(event){
    console.log(event.target.tagName);
    if(event.target.tagName === 'BUTTON')
    {
        event.target.parentElement.remove();
    }
    else if(event.target.tagName === 'INPUT') {
            event.target.parentElement.style.textDecoration = 'line-through';
    }
});

