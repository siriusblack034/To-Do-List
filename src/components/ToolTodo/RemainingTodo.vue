<template>
  <div >
    <h5>{{remaining}} Items Left</h5>
  </div>
</template>

<script>
export default {
  computed: {
    remaining() {
      return this.$store.getters.remaining;
    },
  },
};
</script>
<style scoped>
body{
  float:left
}
</style>