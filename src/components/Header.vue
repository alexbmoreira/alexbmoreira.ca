<template>
  <div class="relative flex bg-black h-screen">
    <div class="text-white flex flex-col m-auto space-y-4">
      <h1 class="mx-auto text-6xl md:text-5xl font-quicksand">Alex Moreira</h1>
      <h1 class="mx-auto text-2xl md:text-xl">Software Developer • <i>Toronto, ON</i></h1>
      <div class="mx-auto text-4xl justify-around flex w-9/12 md:text-3xl">
        <a href="https://github.com/alexbmoreira" class="text-center transition duration-400 ease-in-out hover:text-blue-600 z-10">
          <i class="fab fa-github"></i>
          <p class="text-xs">Github</p>
        </a>
        <a href="https://www.linkedin.com/in/alexbmoreira" class="text-center transition duration-400 ease-in-out hover:text-blue-600 z-10">
          <i class="fab fa-linkedin"></i>
          <p class="text-xs">LinkedIn</p>
        </a>
        <a href="https://drive.google.com/file/d/1Z6F-wBMO3iffY8EqHHPXc_ctAi5DKsjX/view?usp=sharing" class="text-center transition duration-400 ease-in-out hover:text-blue-600 z-10">
          <i class="fas fa-file-pdf"></i>
          <p class="text-xs">Resume</p>
        </a>
      </div>
    </div>
    <div class="absolute left-0 top-0 bg-transparent w-full h-screen">
      <ParticlesJS />
    </div>
  </div>
</template>

<script>
import ParticlesJS from './ParticlesJS'

export default {
  name: "Header",
  components: {
    ParticlesJS
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
