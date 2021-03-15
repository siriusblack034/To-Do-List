<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox"  v-model="completed" @change="doneEdit" />
      <div
        v-if="!editing"
        @dblclick="editTodo"
        class="todo-item-label"
        :class="{ completed : completed }"
      >{{title}}</div>
      <input
        v-else
        type="text"
        class="todo-item-edit"
        v-model="title"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        @blur="doneEdit"
      />
    </div>
    <button type="button" class="btn btn-danger btn-sm remove-item" @click="removeItem(todo)">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    checkAll:Boolean
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEdit: "",
    };
  },
  methods: {
    removeItem() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
    editTodo() {
      this.editing = true;
      this.beforeEdit = this.title;
    },
    cancelEdit() {
      this.editing = false;
      this.title = this.beforeEdit;
    },
    doneEdit() {
      if (this.title.trim() == "") this.title = this.beforeEdit;
      this.editing = false;
      this.$store.dispatch("editTodo", {
        id: this.id,
        title: this.title,
        completed: this.completed,
        editing: this.editing,
      });
    },
  },
  watch:{
    checkAll(){
      this.completed = this.checkAll ? true : this.todo.completed
    }
  }
};
</script>

<style scoped>
.todo-item-left {
  display: flex;
  align-items: center;
  position: relative;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}
.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
</style>