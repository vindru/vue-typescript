<template>
  <Header />
  <Container>
    <main>
      <slot />
    </main>
    <Footer />
  </Container>
</template>

<script>
import Container from "./Container.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default {
  name: "Layout",
  components: {
    Container,
    Header,
    Footer,
  },
};
</script>
