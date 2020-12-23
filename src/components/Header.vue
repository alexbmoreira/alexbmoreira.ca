<template>
  <div class="header">
    <div class="words">
      <h1 class="name">Alex Moreira</h1>
      <h1 class="description">Software Developer • <i>Toronto, ON</i></h1>
      <div class="links">
        <a href="https://github.com/alexbmoreira" class="link">
          <i class="fab fa-github"></i>
          <p class="link-text">Github</p>
        </a>
        <a href="https://www.linkedin.com/in/alexbmoreira" class="link">
          <i class="fab fa-linkedin"></i>
          <p class="link-text">LinkedIn</p>
        </a>
        <a href="" class="link">
          <i class="fas fa-file-pdf"></i>
          <p class="link-text">Resume</p>
        </a>
      </div>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      
    }
  },
};
</script>

<style scoped>
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
  font-size: 4.5rem;
  line-height: 1; /* text-7xl */
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
</style>
