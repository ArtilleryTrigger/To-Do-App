const inputTask = document.getElementById("input--task");
const btn = document.getElementById("btn");
const task = document.getElementById("task");
btn.addEventListener("click", mainFunction);
function deleteItem(e){
    if(e.target.className === 'fas fa-trash-alt'){
        if(confirm('Are you sure you want to delete')){
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}
function enterKeyPressed(event) {
      if (event.keyCode == 13) {
        console.log("Enter key is pressed");
        mainFunction()
    }
}
function mainFunction(){
    if (inputTask.value){
        console.log(inputTask);
        let outputTask = document.createElement("li");
        outputTask.classList.add("output-task");
        task.appendChild(outputTask);
        outputTask.innerHTML = inputTask.value + '<button class="delete-icon"><i class="fas fa-trash-alt"></i></button>';
        inputTask.value = "";
        task.addEventListener("click", deleteItem);
        inputTask.placeholder = 'Add item...';
        outputTask.addEventListener("click", function(){
            if (outputTask.style.textDecoration == 'line-through'){
                outputTask.style.textDecoration = 'none';
                outputTask.style.backgroundColor = 'white'
            }else{
                outputTask.style.textDecoration = 'line-through';
                outputTask.style.backgroundColor = 'green'
            }
        });
    }else{
        inputTask.placeholder = 'You can\'t add empty item';
    }
}