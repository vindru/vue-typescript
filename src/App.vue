<template>
  <Layout>
    <div id="nav">
      <router-link to="/"> {{ $t("title.register") }} </router-link> |
      <router-link to="/about"> {{ $t("title.about") }} </router-link>
    </div>
    <router-view />
  </Layout>
</template>  


<script lang="ts">
import Layout from "@/components/Layout.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
