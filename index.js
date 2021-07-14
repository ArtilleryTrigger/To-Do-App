let inputTask = document.getElementById("input--task");
let btn = document.getElementById("btn");
let task = document.getElementById("task");

btn.addEventListener("click",function(){
    let outputTask = document.createElement("li");
    outputTask.classList.add("output-task");
    task.appendChild(outputTask);
    outputTask.innerHTML = inputTask.value + '<button class="delete-icon"><i class="fas fa-trash-alt"></i></button>';
    inputTask.value = "";
    task.addEventListener("click", deleteItem);
    outputTask.addEventListener("click", function(){
        outputTask.classList.toggle('checked');
        outputTask.style.textDecoration = 'line-through';
        outputTask.style.backgroundColor = 'green'
    })
});

function deleteItem(e){
    if(e.target.className === 'fas fa-trash-alt'){
        if(confirm('Are you sure you want to delete')){
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}
