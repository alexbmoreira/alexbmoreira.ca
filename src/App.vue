<template>
  <div id="app">
    <Header ref="header" />
    <Navbar ref=navbar />
    <Menu />
    <About />
    <Resume />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
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
    Menu,
    About,
    Resume,
    Portfolio,
    Footer
  },
  methods: {
    handleScroll() {
      console.log(window)
      console.log(this.$refs.navbar.$el.clientHeight)
    }
  }
};
</script>

<style></style>
