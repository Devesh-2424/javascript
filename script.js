function addTask() {
  const taskInput = document.getElementById("taskInput");
  const prioritySelect = document.getElementById("prioritySelect");
  const deadlineInput = document.getElementById("deadlineInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  const deadline = deadlineInput.value;

  if (taskText === "" || deadline === "") {
    alert("Please enter all fields!");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  taskItem.innerHTML = `
    <span>${taskText}</span>
    <span>Priority: ${priority.toLowerCase()}</span>
    <span>Deadline: ${deadline}</span>
    <button onclick="markDone(this)">Mark Done</button>
  `;

  taskList.appendChild(taskItem);

  // Clear input fields
  taskInput.value = "";
  deadlineInput.value = "";
}

function markDone(button) {
  const taskItem = button.parentElement;
  taskItem.style.textDecoration = "line-through";
  button.remove();
}
// Optional script if you want to mark as done
document.querySelectorAll('.done-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.style.textDecoration = 'line-through';
    button.remove();
  });
});

