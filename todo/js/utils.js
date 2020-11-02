import ls from './ls.js';

function activeFilter(todos) {
    return  todos.filter(todo =>{
        //Return all false
         return !todo.completed

    })
     
}
function completedFilter(todos) {
    return  todos.filter(todo =>{
        //Return all true
         return todo.completed

    })
     
}

export default{
    activeFilter,
    completedFilter
}