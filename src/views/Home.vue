<template>
  <div class="home">
    <img src="../assets/logo.png" class="logo" />
    <InputField />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputField from "@/components/InputField.vue";

export default defineComponent({
  name: "Home",
  components: {
    InputField,
  },
});
</script>
<style scoped>
.logo {
  height: 100px;
}
</style>
