<template>
  <div id="app">
    <Header ref="header" />
    <Navbar ref="navbar" />
    <Menu :class="{'invisible': !show_menu}" />
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
      show_menu: false
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
      this.show_menu = (window.pageYOffset >= this.$refs.header.$el.clientHeight)
    }
  },
  created() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
};
</script>

<style></style>
