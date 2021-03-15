<template>
  <div class="row">
      <check-all class="col-1 col-sm-1"></check-all>
      <record class="col-11 col-sm-11"></record>
  </div>
</template>

<script>
import CheckAll from './CheckAll'
import Record from './RecordTask'
export default {
    components:{
        CheckAll,
        Record
    }
}
</script>

<style scoped>
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}

</style>