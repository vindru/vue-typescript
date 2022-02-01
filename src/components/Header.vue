<template>
  <Container>
    <img src="../assets/logo.png" class="logo" />
  </Container>
</template>

<script>
import { Container } from "./Container.vue";
export default {
  components: {
    Container,
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin: 40px 0;
}
.logo {
  height: 150px;
}
</style>
