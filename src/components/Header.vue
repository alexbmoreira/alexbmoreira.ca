<template>
  <div class="relative flex bg-black h-screen">
    <div class="text-white flex flex-col m-auto space-y-6">
      <h1 class="mx-auto text-6xl md:text-5xl">Alex Moreira</h1>
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
        <a href="" class="text-center transition duration-400 ease-in-out hover:text-blue-600 z-10">
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

<!-- <style scoped>
.header {
  position: relative; /* relative */
  display: flex; /* flex */
  height: 100vh; /* h-screen */
}

.background {
  position: absolute; /* absolute */
  left: 0; /* left-0 */
  top: 0; /* top-0 */
  background-color: black; /* bg-black */
  width: 100vw; /* w-screen */
  height: 100vh; /* h-screen */
  z-index: -10; /* z-n10 */
}

.words {
  color: white; /* text-white */
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
  margin: auto; /* m-auto */
}

.name {
  margin: 0 auto; /* mx-auto */
  font-size: 3.75rem;
  line-height: 1; /* text-6xl */
}

.description {
  margin: 0 auto; /* mx-auto */
  margin-top: 0.5rem; /* mt-2 */
  font-size: 1.5rem;
  line-height: 2rem; /* text-2xl */
}

.links {
  margin: 0 auto; /* mx-auto */
  margin-top: 1rem; /* mt-4 */
  font-size: 2.25rem;
  line-height: 2.5rem; /* text-4xl */
  justify-content: space-around; /* justify-around */
  display: flex; /* flex */
  width: 75%; /* w-9/12 */
}
.link {
  text-align: center; /* text-center */
}
.link-text {
  font-size: 0.875rem;
  line-height: 1.25rem; /* text-sm */
}
</style> -->
