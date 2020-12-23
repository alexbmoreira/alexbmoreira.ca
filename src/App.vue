<template>
  <div id="app">
    <Header />
    <About />
    <Resume />
  </div>
</template>

<script>
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";

export default {
  name: "App",
  components: {
    Header,
    About,
    Resume
  }
};
</script>

<style></style>
