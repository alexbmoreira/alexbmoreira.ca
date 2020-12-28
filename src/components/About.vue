<template>
  <div id="about" class="bg-gray-800 flex">
    <div class="m-auto">
      <div class="flex p-8 px-64 xl:px-24 md:px-12 md:flex-col sm:px-6">
        <div class="w-1/6 md:mx-auto md:w-1/4 sm:w-1/2">
          <img class="rounded-full" src="@/assets/images/headshot.jpg" alt="" />
        </div>
        <div class="pl-6 flex flex-col w-5/6 md:pl-0 md:mx-auto">
          <h1 class="text-2xl font-bold text-white">About Me</h1>
          <p class="text-gray-400 text-justify">
            A 2021 computer science graduate from the University of Guelph who
            embraces challenges in programming and has a strong passion for the
            realm of information technology. Has been programming for over 7
            years, in C, Python, Javascript, and Java, with industry experience
            working in C# and SQL.
          </p>
          <h1 class="text-2xl font-bold text-white pt-3">Contact</h1>
          <div class="flex flex-col text-gray-400">
            <a href="mailto:alexbmoreira@gmail.com"
              ><span
                class="transition duration-400 ease-in-out hover:text-white"
                ><i class="fas fa-envelope mr-2"></i
                >alexbmoreira@gmail.com</span
              ></a
            >
            <a href="tel:+14164336886"
              ><span
                class="transition duration-400 ease-in-out hover:text-white"
                ><i class="fas fa-phone-alt mr-2"></i>(416) 433-6886</span
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<style scoped></style>
