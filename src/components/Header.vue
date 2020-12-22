<template>
  <div class="header">
    <h1 class="name">Alex Moreira</h1>
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

.name {
  color: white; /* text-white */
  margin: 0 auto; /* mx-auto */
  margin-top: 15rem; /* m-60 */
  font-size: 4.5rem;
  line-height: 1; /* text-xl */
}
</style>
