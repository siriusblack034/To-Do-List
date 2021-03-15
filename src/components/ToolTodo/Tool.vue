<template>
  <div class="row">
    <remaining class="col-3 " />
    <filter-todo class="col-6 "/>
    <clear class="col-3.5"/>
  </div>
</template>

<script>
import Clear from "./ClearCompleted";
import FilterTodo from "./FilterTodo";
import Remaining from "./RemainingTodo";
export default {
  components: {
    Clear,
    FilterTodo,
    Remaining,
  },
};
</script>

<style scoped >

</style>