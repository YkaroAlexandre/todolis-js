function adicionarTarefa() {
  const textInput = window.document.getElementById("nome_tarefa");
  console.log("pt1");

  const taskList = document.getElementById("list_task");
  console.log("pt2");

  const newTask = document.createElement("li");
  console.log("pt3");

  const marker = document.createElement("div");
  marker.classList.add("marker");
  newTask.appendChild(marker);
  console.log("pt4");

  const taskText = document.createElement("span");
  taskText.textContent = textInput.value;
  newTask.appendChild(taskText);
  console.log("pt5");

  const iconTrash = document.createElement("i");
  iconTrash.classList.add("fa-regular");
  iconTrash.classList.add("fa-trash-can");
  console.log("pt6");

  const iconCheck = document.createElement("i");
  iconCheck.classList.add("fa-solid");
  iconCheck.classList.add("fa-check");
  console.log("pt7");

  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons_container");
  iconsContainer.appendChild(iconCheck);
  iconsContainer.appendChild(iconTrash);
  console.log("pt8");

  newTask.appendChild(iconsContainer);
  console.log("pt9");

  taskList.appendChild(newTask);
  console.log("pt10");

  taskText.value = "";
  console.log("pt11");
}
