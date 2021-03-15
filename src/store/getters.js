export default {
  errors: state => {
      state.errors;
  },
  
  remaining(state) {
      return state.task.filter(todo => !todo.completed).length
  },
  anyRemaining(state, getters){
      return getters.remaining != 0
  },
  todosFiltered(state) {
      if (state.filter == ' all') {
          return state.task
      }
      else if (state.filter == 'active')
          return state.task.filter(todo => !todo.completed)
      else if (state.filter == 'completed')
          return state.task.filter(todo => todo.completed)
      else
          return state.task
  },
  showClearCompletedButton(state) {
      return state.task.filter(todo => todo.completed).length > 0
  }
}

