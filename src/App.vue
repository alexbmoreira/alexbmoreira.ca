<template>
  <div id="app">
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    About,
    Resume,
    Portfolio,
    Footer
  }
};
</script>

<style></style>
