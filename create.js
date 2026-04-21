document.getElementById("createBtn").addEventListener("click", function () {
    const summary = document.getElementById("summary").value;
    const status = document.getElementById("status").value;

    if (summary === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        summary: summary,
        status: status
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task created!");

    window.location.href = "board.html";
});