const inpotBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inpotBox.value === ''){
        alert("you must write something")
    }
    else {
        let li =document.createElement("li")
        li.innerHTML = inpotBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span) 
    }
    inpotBox.value = "";
    saveData()
    
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);
//وقتی چیزی وارد کنیم سیو میکنه 
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)

}
//وقتی برازرو باز میکنیم دیتا پیدا میکنه 
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")}
showTask();
