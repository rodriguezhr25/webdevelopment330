function saveTodo(todo) {
        const toDoList = getTodoList();
        toDoList.push(todo);
        localStorage.setItem('toDoList',JSON.stringify(toDoList));
}

function deleteTodo(id){
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter(todo => todo.id != id);
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}
function updateTodo(id){
    const toDoList = getTodoList();   
    let result = false;
    const updatedTodos = toDoList.map(todo => {
        if(todo.id == id){
            todo.completed = todo.completed ? false: true;
            result = todo.completed;
        }
        return todo;
    });
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));    
    return result;
}

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if(todoListString){
        todoList = JSON.parse(todoListString)
    }

    return todoList;
}

export default{

    saveTodo,
    updateTodo,
    deleteTodo,
    getTodoList,
   
}