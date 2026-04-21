
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    
    document.getElementById("todoList").innerHTML = "";
    document.getElementById("progressList").innerHTML = "";
    document.getElementById("reviewList").innerHTML = "";
    document.getElementById("doneList").innerHTML = "";

    tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        taskCard.innerHTML = `
            <p>${task.summary}</p>
            <select onchange="updateStatus(${task.id}, this.value)">
                <option ${task.status === "Todo" ? "selected" : ""}>Todo</option>
                <option ${task.status === "Inprogress" ? "selected" : ""}>Inprogress</option>
                <option ${task.status === "Review" ? "selected" : ""}>Review</option>
                <option ${task.status === "Done" ? "selected" : ""}>Done</option>
            </select>
        `;

        if (task.status === "Todo") {
            document.getElementById("todoList").appendChild(taskCard);
        } 
        else if (task.status === "Inprogress") {
            document.getElementById("progressList").appendChild(taskCard);
        }
        else if (task.status === "Review") {
            document.getElementById("reviewList").appendChild(taskCard);
        }
        else if (task.status === "Done") {
            document.getElementById("doneList").appendChild(taskCard);
        }
    });
}

function updateStatus(id, newStatus) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.map(task => {
        if (task.id === id) {
            task.status = newStatus;
        }
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadTasks();
}
// RUN ON PAGE LOAD
loadTasks();