const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-containers");

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Input Field cannot be empty!");
        return;
    }

    const list = document.createElement("li");
    list.textContent = task;

    const span = document.createElement("span");
    span.textContent = "\u00d7";
    list.appendChild(span);

    listContainer.appendChild(list);
    inputBox.value = '';
    saveData();
}


listContainer.addEventListener("click", function (e) {
    const target = e.target;
    switch (target.tagName) {
        case "LI":
            target.classList.toggle("checked");
            saveData();
            break;
        case "SPAN":
            target.parentElement.remove();
            saveData();
            break;
    }
});


function saveData() {
    localStorage.setItem("todo_list", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("todo_list");
}

showTask();