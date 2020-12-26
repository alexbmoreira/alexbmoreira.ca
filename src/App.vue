<template>
  <div id="app">
    <Header ref="header" />
    <Navbar />
    <About />
    <Resume />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    Header,
    Navbar,
    About,
    Resume,
    Portfolio,
    Footer
  },
  methods: {
  }
};
</script>

<style></style>
