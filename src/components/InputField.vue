<template>
  <div class="inputField">
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('changeValue', $event.target.value, name)"
    />
    <span class="errorMessage" v-if="invalidInput">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputField",
  props: {
    placeholder: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    invalidInput: {
      required: true,
      type: Boolean,
    },
    errorMessage: {
      default: "",
      type: String,
    },
  },
  emits: ["changeValue"],
});
</script>

<style scoped>
input {
  display: block;
  width: 200px;
  padding: 10px;
  border-radius: var(--borderRadius);
  background-color: var(--bg);
  color: var(--color-secondary);
  outline: none;
  font-size: 18px;
  border: 1px solid #ccc;
}
.errorMessage {
  color: red;
  font-size: 12px;
}
.inputField {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
