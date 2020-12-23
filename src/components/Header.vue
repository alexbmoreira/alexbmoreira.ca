<template>
  <div class="relative flex h-screen">
    <div class="text-white flex flex-col m-auto">
      <h1 class="mx-auto text-6xl">Alex Moreira</h1>
      <h1 class="mx-auto mt-2 text-2xl">
        Software Developer • <i>Toronto, ON</i>
      </h1>
      <div class="mx-auto mt-4 text-4xl justify-around flex w-9/12">
        <a href="https://github.com/alexbmoreira" class="text-center">
          <i class="fab fa-github"></i>
          <p class="text-sm">Github</p>
        </a>
        <a href="https://www.linkedin.com/in/alexbmoreira" class="text-center">
          <i class="fab fa-linkedin"></i>
          <p class="text-sm">LinkedIn</p>
        </a>
        <a href="" class="text-center">
          <i class="fas fa-file-pdf"></i>
          <p class="text-sm">Resume</p>
        </a>
      </div>
    </div>
    <div class="absolute left-0 top-0 bg-black w-screen h-screen -z-10"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
