const mutations = {
    addTodo(state, todo) {
        state.task.push({
            id: todo.id,
            title: todo.title,
            completed: false,
            editing: false
        })
    },
    editTodo(state, todo) {
        var index = state.task.findIndex(item => item.id == todo.id);
        state.task.splice(index, 1, {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            editing: todo.editing
        })
       
    },
    deleteTodo(state, todo) {
        var index = state.task.findIndex(item => item.id == todo.id)
        
        state.task.splice(index, 1)
    },
    checkAll(state, checked) {
        state.task.forEach(todo => (todo.completed = checked))
    },
    updateFilter(state, filter) {
        state.filter = filter
    },
    clearComplete(state) {
        state.task = state.task.filter(todo => !todo.completed)
    },
    
}
export default mutations