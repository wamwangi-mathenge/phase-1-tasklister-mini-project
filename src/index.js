
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    showToDo(e.target.new_task_description.value)
  })
});

function showToDo(task){
  let deleteBtn = document.createElement('button')
  let listTasks = document.createElement('p')
  deleteBtn.style.margin = '8px'
  deleteBtn.innerHTML = 'x'
  deleteBtn.addEventListener('click', () => {
    listTasks.remove()
  })
  listTasks.innerHTML = task
  listTasks.appendChild(deleteBtn)
  document.querySelector('#tasks').appendChild(listTasks)
}