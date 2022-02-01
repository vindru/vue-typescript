<template>
  <input
    :type="type"
    :placeholder="placeholder"
    @input="$emit('changeValue', $event.target.value)"
  />
  <div v-if="validInput">Name field has an error.{{ errorMessage }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputField",
  emits: ["changeValue"],
  props: {
    placeholder: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    validInput: {
      required: true,
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
  },
  script() {
    console.log(this.validInput);
  },
});
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: var(--borderRadius);
  background-color: var(--bg);
  color: var(--color-secondary);
  outline: none;
  font-size: 18px;
  border: 1px solid #ccc;
}
</style>
