<template>
  <div class="container">
      <div>
        <header-todo></header-todo>
      <todo-item v-for="todo in todosFiltered" :key="todo.id" :todo="todo" :checkAll='!anyRemaining'></todo-item>
      <div v-if="task">
        <tool-todo v-if="task"></tool-todo>
      </div>
    </div>
    <div class="the-end">
      <h3>#Coding by Sirius</h3>
    </div>
  </div>
</template>

<script>
import HeaderTodo from './HeaderTodo/Header'
import TodoItem from './TodoItem'
import ToolTodo from './ToolTodo/Tool'
export default {
  components:{
    HeaderTodo,
    TodoItem,
    ToolTodo
  },
  created(){
    this.$store.dispatch('retrieveTodos')
  },
  computed:{
    todosFiltered(){
      return this.$store.getters.todosFiltered
    },
    anyRemaining(){
      return this.$store.getters.anyRemaining
    },
    task(){
      return this.$store.state.task.length >0
    }
  }
}
</script>

<style>
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
button {
  font-size: 14px;
  background-color: white;
  appearance: none;
}
.active {
  background: lightgreen;
}
.the-end{
  text-align: center;
  opacity: 0.3;
  position:absolute;
  bottom:0;
}
</style>