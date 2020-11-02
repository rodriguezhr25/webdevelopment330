import utils from './utils.js';
import ls from './ls.js';

document.querySelector("#addBtn").onclick  = newTodo;
document.querySelector("#allFilter").onclick = applyFilter;
document.querySelector("#activeFilter").onclick = applyFilter;
document.querySelector("#completedFilter").onclick = applyFilter;
loadTodos();
function loadTodos(){
    const todoList = ls.getTodoList(); /// get the elements in the JSON file

    todoList.forEach(todo => {
        const el = createTodoElement(todo); //Create element
        addToList(el); //Add to list of elements
    });

    
}
function newTodo(){
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);

}

function createTodo(){
    const content = document.getElementById("todoInput");
    const newTodo = { id : Date.now(), content: content.value, completed: false }
    content.value = ''; 
    return newTodo;
}

function createTodoElement(todo){
    //Create todo div HTML element
    const todoDiv =document.createElement('div');
    todoDiv.classList.add('todo');
    //Create the button to mark the task as done
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.onclick = updateTodo;
    if(todo.completed){
        completeBtn.innerText = "\u2714";
    }else{
        completeBtn.innerText = "";
    }
    //Create the div to show the content of the task
    const todoContent = document.createElement('div');
    todoContent.innerText =todo.content;
    todoContent.classList.add('todo-content');
    //Create button to delete the todo element
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id); //Identify the button as unique with the id of the todo object
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv; //HTML Element

}
//Event handlers
function deleteTodo(e){
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = ''; //Empty list
    loadTodos(); //reload divs
}
function updateTodo(e){
    const btn = e.currentTarget;
    if(ls.updateTodo(btn.getAttribute('data-id'))){
        btn.innerText = "\u2714";
    }else{
        btn.innerText = "";
    }
  
    
}
function addToList(todoDiv){
    //Add the new element to the todo list
    document.querySelector('#todos').appendChild(todoDiv);
}

function applyFilter(e){
    //Clear the list
    document.querySelector('#todos').innerHTML = ''; //Empty list
    //Variables, obtain elements in localstorage
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    if(e.currentTarget.id == 'activeFilter'){
        filteredTodos = utils.activeFilter(allTodos);
    }else if(e.currentTarget.id == 'completedFilter'){
        filteredTodos = utils.completedFilter(allTodos);
    }else if(e.currentTarget.id == 'allFilter'){
        filteredTodos = allTodos;
    }

    filteredTodos.forEach(todo =>{
        const el = createTodoElement(todo); //Create element
        addToList(el); //Add to list of elements

    })
}


