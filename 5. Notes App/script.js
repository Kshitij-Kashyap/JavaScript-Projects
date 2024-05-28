const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    let img = document.createElement("img");
    img.src = "images/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("keyup", (e) => {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});

document.addEventListener("keydown", event => {
    event.key === "Enter" && (event.preventDefault(), document.execCommand("insertLineBreak"));
});

// Initial call to show notes from storage
showNotes();
