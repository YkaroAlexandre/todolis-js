function adicionarTarefa() {
  const textInput = window.document.getElementById("nome_tarefa");

  if (textInput.value == "" || textInput.value === null) {
    alert("Digite uma tarefa");
  } else {
    

    const taskList = document.getElementById("list_task");
    

    const newTask = document.createElement("li");
    

    const marker = document.createElement("div");
    marker.classList.add("marker");
    newTask.appendChild(marker);
    

    const taskText = document.createElement("span");
    taskText.textContent = textInput.value;
    newTask.appendChild(taskText);
    

    const iconTrash = document.createElement("i");
    iconTrash.classList.add("fa-regular");
    iconTrash.classList.add("fa-trash-can");
    
    iconTrash.onclick = () => newTask.remove();

    const iconCheck = document.createElement("i");
    iconCheck.classList.add("fa-solid");
    iconCheck.classList.add("fa-check");
    

    const textLined = false
    iconCheck.onclick = ()=>{
      taskText.style.textDecoration = "line-through"
    }

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons_container");
    iconsContainer.appendChild(iconCheck);
    iconsContainer.appendChild(iconTrash);
    

    newTask.appendChild(iconsContainer);

    taskList.appendChild(newTask);

  }

}
