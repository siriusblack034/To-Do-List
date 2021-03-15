const actions = {
    
    addTodo({commit}, todo) {
        commit('addTodo',todo)
    },
    editTodo(context, todo) {
        commit('editTodo',todo)
    },
    deleteTodo(context, todo) {
      context.commit('deleteTodo', todo)
    },
    checkAll(context, checked) {
      context.commit('checkAll', checked)
    },
    updateFilter(context, filter) {
        setTimeout(() => {
            context.commit('updateFilter', filter)
        }, 100)
    },
    clearComplete({commit}) {
        commit('clearComplete')
    }
}
export default actions