const tasks = [];

function addTask() {
    const name = document.getElementById("taskName").value;
    const date = document.getElementById("taskDate").value;
    const status = document.getElementById("taskStatus").value;

    if (!name || !date) {
        alert("Please enter both Task Name and Due Date.");
        return;
    }

    tasks.push({
        name: name,
        date: date,
        status: status
    });

    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskStatus").value = "Pending";

    renderTasks(tasks);
}

function filterTasks(type) {
    const today = new Date().toISOString().split('T')[0];

    let filtered = tasks;

    filtered = type === 'upcoming' 
        ? tasks.filter(task => task.date > today)
        : type === 'past' 
        ? tasks.filter(task => task.date < today)
        : tasks;

    renderTasks(filtered);
}

function renderTasks(taskArray) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    if (taskArray.length === 0) {
        taskList.innerHTML = "<p>No tasks found.</p>";
        return;
    }

    taskArray.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `
            <strong>${task.name}</strong><br>
            Due: ${task.date}<br>
            Status: ${task.status}
        `;
        taskList.appendChild(taskDiv);
    });
}
