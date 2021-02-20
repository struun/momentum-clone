const nameForm = document.querySelector(".name-form"),
      nameInput = document.querySelector("#name-input"),
      name = document.querySelector("h4");

function saveName(text) {
    localStorage.setItem("currentUser", text);
}

function askName() {
    nameForm.classList.add('showing');
    nameForm.addEventListener("submit", handleSubmit);
}

function showName(text) {
    nameForm.classList.remove('showing')
    name.classList.add('showing')
    name.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser === null) {
        askName();
    } else {
        showName(currentUser);
    }
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = nameInput.value;
    showName(currentValue);
    saveName(currentValue);
}


loadName();