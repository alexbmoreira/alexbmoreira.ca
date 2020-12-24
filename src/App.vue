<template>
  <div id="app">
    <Header />
    <About />
    <Resume />
    <Portfolio />
  </div>
</template>

<script>
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

export default {
  name: "App",
  components: {
    Header,
    About,
    Resume,
    Portfolio
  }
};
</script>

<style></style>
