<template>
  <div>
      <button class="btn btn-danger btn-sm"  v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
export default {
    computed:{
        showClearCompletedButton(){
            return this.$store.getters.showClearCompletedButton
        }
    },
    methods:{
        clearCompleted(){
            this.$store.dispatch('clearComplete')
        }
    }
}
</script>

<style>
    
</style>