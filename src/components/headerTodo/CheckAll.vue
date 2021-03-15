<template>
  <div class="round">
    <input type="checkbox" id="checkbox" name="checkAll" :checked="!anyRemaining" @change="allChecked" />
    <label for="checkbox"></label>
  </div>
</template>

<script>
export default {
  name: "todo-check-all",
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },
  },
  methods: {
    allChecked() {
      this.$store.dispatch("checkAll", event.target.checked);
    },
  },
};
</script>
<style  scoped>
.round {
  position: relative;
  margin-top: 10px;
  
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 30px;
}

.round label:after {
  border: 2px solid black;
  border-top: none;
  border-right: none;
  content: "";
  height: 7px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 15px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}


.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

</style>