
const space = JSON.parse(localStorage.getItem("smarttaskSpace"));

if (space) {
    document.getElementById("welcomeText").innerText =
        "Welcome to " + space.name + "!";
} else {
    document.getElementById("welcomeText").innerText =
        "Welcome to SmartTask!";
}