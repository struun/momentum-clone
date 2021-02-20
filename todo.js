const toDoForm = document.querySelector(".todo-box"),
      toDoList = document.querySelector(".todo-list"),
      toDoInput = document.querySelector("#todo");

let toDos = [];

function saveToDo() {
	localStorage.setItem("todo", JSON.stringify(toDos));
}

function showToDo(text) {
	const list = document.createElement("li"),
		  span = document.createElement("span"),
		  delBtn = document.createElement("button");

    //const clearBtn = document.createElement("button");
		  
	toDoList.appendChild(list);
    list.appendChild(delBtn);
	list.appendChild(span);
	//list.appendChild(clearBtn);
	
	span.innerHTML = text;
	delBtn.innerHTML = "✘";
    delBtn.style.color = "red";
    delBtn.style.background = "transparent";
    delBtn.style.border = "none";
    delBtn.style.pointerEvents = ""
	//clearBtn.innerHTML = "✔";
	
	delBtn.addEventListener("click", delToDo);
	//clearBtn.addEventListener("click", clearToDo);
	
	
	const newID = toDos.length + 1;
	
	list.id = newID;
	
	const toDoObj = {
		text : text,
		id : newID
	}
	
	toDos.push(toDoObj);
	
	saveToDo();
}

function delToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	
	toDoList.removeChild(li);
	
	const clearToDos = toDos.filter(todo => {
		return todo.id !== parseInt(li.id);
	})
	
	toDos = clearToDos;
    saveToDo();
}

/* function clearToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.firstChild;

    span.style.textDecoration = "line-through";
    saveToDo();
    버튼 누르면 클래스 적용하고 CSS파일에 직접 스타일 저장해야 
    새로고침해도 유지될 듯
} */

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem("todo");
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(todo => {
            showToDo(todo.text);
        });
    }
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
    loadToDos();
}


init();