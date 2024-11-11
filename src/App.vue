<template>
  <div id="app" class="font-quicksand text-midnight">
    <Header ref="header" />
    <Navbar ref="navbar" />
    <Menu :class="{ invisible: !show_menu }" />
    <About />
    <Resume />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

export default {
  name: "App",
  data() {
    return {
      show_menu: false
    };
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
      this.show_menu = window.pageYOffset >= this.$refs.header.$el.clientHeight;
    }
  },
  created() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style></style>
