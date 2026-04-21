document.getElementById("createSpaceBtn").addEventListener("click", function () {
    const spaceName = document.getElementById("spaceName").value;
    const spaceType = document.getElementById("spaceType").value;
    const accessType = document.getElementById("accessType").value;

    if (spaceName === "") {
        alert("Please enter a space name");
        return;
    }

    const space = {
        name: spaceName,
        type: spaceType,
        access: accessType
    };

    localStorage.setItem("smarttaskSpace", JSON.stringify(space));

    window.location.href = "done.html";
});