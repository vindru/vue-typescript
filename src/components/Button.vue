
<template>
  <button class="btn" @click="$emit('onClick')">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    message: { required: true, type: String },
  },
  emits: ["onClick"],
};
</script>

<style scoped>
.btn {
  height: 50px;
  width: 220px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  opacity: 0.8;
}
</style>
