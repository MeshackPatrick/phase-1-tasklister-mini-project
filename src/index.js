document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById(`create-task-form`)
  const ulElement=document.getElementById(`task`)
  form.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    const input = document.getElementById('new-task-description');
    const taskDescription = input.value;gir
    const liElement = document.createElement('li');
    liElement.textContent = taskDescription;
    ulElement.appendChild(liElement);
    input.value = '';
  });
});