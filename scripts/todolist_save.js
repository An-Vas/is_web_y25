
let tasksI = localStorage.getItem('tasks');
if (tasksI) {
    tasks = JSON.parse(tasksI);
} else {
  tasks = [];
}
 

window.onload = function(){ 
  displayTasks(tasks);
  btn = document.getElementById("submit");
  if  (btn){
      btn.onclick=function(){
    const taskInput = document.getElementById('task');
    const l = document.getElementById('inputtasklabel');
    const task = taskInput.value.trim();
    if (task) {
      tasks.push(task);
      displayTasks(tasks);
      taskInput.value = "";
            
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    return false;
  }
  }
  
 };


 
function displayTasks(tasks) {
  const listContainer = document.getElementById('list');
  listContainer.innerHTML = "";
          
  if (tasks.length > 0) {
    const list = document.createElement('ul');
    tasks.forEach(function(task) {
      const listItem = document.createElement('li');
      listItem.textContent = task;
      list.appendChild(listItem);}
    );
  listContainer.appendChild(list);}
  else {
    listContainer.textContent = 'Список задач пуст';
  }
}