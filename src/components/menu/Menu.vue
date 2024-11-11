<template>
  <div>
    <div
      :class="{ 'scale-100': expand }"
      class="transform origin-menu rounded bg-midnight fixed top-4 left-4 p-3 scale-0 sm:p-2 sm:top-2 sm:left-2 transition duration-300 ease-in-out"
    >
      <div class="flex flex-col">
        <div
          class="flex text-snow h-full cursor-pointer mb-3 text-2xl sm:text-base"
          @click="clickMenu()"
        >
          <i class="fas fa-bars"></i>
        </div>
        <div
          :class="{ 'opacity-100': expand }"
          class="flex flex-col space-y-2 opacity-0 transition delay-100 duration-300 ease-in-out"
        >
          <a href="#about" @click="clickMenu()">
            <span
              class="cursor-pointer text-snow text-lg hover:text-cornflower"
            >
              About
            </span>
          </a>
          <a href="#experience" @click="clickMenu()">
            <span
              class="cursor-pointer text-snow text-lg hover:text-cornflower"
            >
              Experience
            </span>
          </a>
          <a href="#education" @click="clickMenu()">
            <span
              class="cursor-pointer text-snow text-lg hover:text-cornflower"
            >
              Education
            </span>
          </a>
          <a href="#portfolio" @click="clickMenu()">
            <span
              class="cursor-pointer text-snow text-lg hover:text-cornflower"
            >
              Portfolio
            </span>
          </a>
        </div>
      </div>
    </div>
    <div
      class="rounded-full bg-midnight fixed top-4 left-4 w-12 h-12 sm:w-8 sm:h-8 sm:top-2 sm:left-2"
    >
      <div
        class="flex justify-center text-snow items-center h-full cursor-pointer text-2xl sm:text-base"
        @click="clickMenu()"
      >
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      expand: false
    };
  },
  methods: {
    clickMenu() {
      this.expand = !this.expand;
    },
    handleScroll() {
      this.expand = false;
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
