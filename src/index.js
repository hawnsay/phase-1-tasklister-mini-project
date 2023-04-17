document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newTaskInput = document.querySelector('#new-task-description');
    const newTask = document.createElement('li');
    newTask.innerText = newTaskInput.value;
  
    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', function() {
      newTask.remove();
    });
    newTask.appendChild(deleteButton);
  
    // create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function() {
      const taskText = newTask.innerText;
      const taskTextInput = document.createElement('input');
      taskTextInput.type = 'text';
      taskTextInput.value = taskText;
      newTask.innerText = '';
      newTask.appendChild(taskTextInput);
      taskTextInput.addEventListener('blur', function() {
        const updatedTaskText = taskTextInput.value;
        newTask.innerText = updatedTaskText;
      });
    });
    newTask.appendChild(editButton);
  
    taskList.appendChild(newTask);
  
    newTaskInput.value = '';
  });

});
