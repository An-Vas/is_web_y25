const content = document.getElementById('content');
const preloader = document.getElementById('preloader');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showError() {
  content.innerHTML = 'Что-то пошло не так';
}

function showData(data) {
  const list = document.createElement('ul');
  
  counter = 0;
  data.forEach(item => {
    if (item.id<150){
      const checkbox = document.createElement('input');
      checkbox.id = "cb-" + counter;
      const labelforcheckbox = document.createElement('label');
      const br = document.createElement('br');
      labelforcheckbox.textContent=item.title + "\n";
      labelforcheckbox.htmlFor = checkbox.id;
      
      checkbox.type = 'checkbox';
      checkbox.className = "custom-checkbox"
      checkbox.checked = item.completed;  
      checkbox.onchange = function(){
      checkbox.checked=true;
      checkbox.classList.add("active")
    }
    
    checkbox.appendChild(labelforcheckbox)
    list.appendChild(checkbox);
    list.appendChild(labelforcheckbox);
    list.appendChild(br);

    counter++;
    }
   
    
        
  });
  
  content.appendChild(list);
}

function loadData() {

  const id = getRandomInt(100, 200);
  
  fetch("https://jsonplaceholder.typicode.com/todos?_start=${id}")
    .then(response => response.json())
    .then(data => {
      preloader.style.display = 'none';
      showData(data);
    })
    .catch(error => {
      preloader.style.display = 'none';
      showError();
    });
}


window.addEventListener('load', loadData);
