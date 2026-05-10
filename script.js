const addBtn = document.querySelector('#add-btn');
const taskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    if (!taskInput.value) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskInput.value}</span>
        <div class="task-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">✕</button>
        </div>
    `;

    // DELETE LOGIC
    li.querySelector('.delete-btn').onclick = () => li.remove();

    // EDIT LOGIC
    li.querySelector('.edit-btn').onclick = function() {
        const textSpan = li.querySelector('.task-text');
        
        if (this.textContent === "Edit") {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = textSpan.textContent;
            li.replaceChild(input, textSpan);
            this.textContent = "Save";
            input.focus();
        } else {
            const input = li.querySelector('input');
            const span = document.createElement('span');
            span.className = 'task-text';
            span.textContent = input.value;
            li.replaceChild(span, input);
            this.textContent = "Edit";
        }
    };

    taskList.appendChild(li);
    taskInput.value = "";
}
