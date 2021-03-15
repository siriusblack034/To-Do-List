<template>
  <input
    type="text"
    class="todo-input"
    @keyup.enter="addTodo"
    autofocus
    placeholder="What needs to be done"
    v-model="newTodo"
  />
</template>
<script>
export default {
  data() {
    return {
      newTodo: "",
      id: 1,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.$store.dispatch("addTodo", {
        id: this.id,
        title: this.newTodo,
      });
     
      this.id++;
      this.newTodo = "";

    },
  },
};
</script>

<style >
</style>