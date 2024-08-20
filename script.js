const inputEl = document.getElementById("input-el");
const olEl = document.getElementById("urgent-list");
function addBtn(){
    let li = document.createElement("li");
    li.innerHTML = inputEl.value;
    olEl.appendChild(li);
    inputEl.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
    saveData()
}

olEl.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", olEl.innerHTML);
}

function showTask(){
    olEl.innerHTML = localStorage.getItem("data");
}

showTask();