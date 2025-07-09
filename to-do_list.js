const todoListObject=JSON.parse(localStorage.getItem('htmlElement'))||[]

console.log(todoListObject)

renderTodo()
function addList()
{
  
  const inputElement=document.querySelector('.js-name-input');
  const dueDateElement=document.querySelector('.js-due-date');

  const name=inputElement.value;
  const dueDate=dueDateElement.value;

  if (!name || !dueDate) {
    alert('Please fill in both task name and due date.');
    return;
  }
  todoListObject.push({name,dueDate});
  renderTodo()
  inputElement.value='';
  dueDateElement.value='';
}

function renderTodo()
{
  let htmlElement='';

  todoListObject.forEach(function(todoList,index)
  {
    const {name,dueDate}=todoList;
    //name=todoListObject.name[i]
    //duedate=todoListObject.duedate[i]
    let html=`<div class="name">${name}</div><div class="duedate">${dueDate}</div><button onclick="remove(${index})" class="delete-button">Delete</button>`
    htmlElement+=html
  })
/*
  for(let i=0;i<todoListObject.length;i++)
  {
    const todoList=todoListObject[i]
    const {name,dueDate}=todoList;
    console.log(todoList);
    console.log({todoListObject});

    //name=todoListObject.name[i]
    //duedate=todoListObject.duedate[i]
    let html=`<div class="name">${name}</div><div class="duedate">${dueDate}</div><button onclick="remove(${i})" class="delete-button">Delete</button>`
    htmlElement+=html
  }*/
  document.querySelector('.displayElements').innerHTML=`${htmlElement}`
  localStorage.setItem('htmlElement',JSON.stringify(todoListObject));
}

function remove(i)
{
  todoListObject.splice(i,1)
  renderTodo()
}

function removeAll()
{
  todoListObject.splice(0,todoListObject.length);
  renderTodo()
}

function handle(event)
{
  if(event.key==='Enter')
  {
    addList()
  }
}