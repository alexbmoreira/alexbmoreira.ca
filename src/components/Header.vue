<template>
  <div class="header">
    <h1 class="name">Hello</h1>
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
  position: relative;
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
</style>
