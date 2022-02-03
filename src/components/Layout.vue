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
import Container from "@/components/Container.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Layout",
  components: {
    Container,
    Header,
    Footer,
  },
};
</script>
