<template>
  <div class="bg-gray-800 flex">
    <div class="m-auto">
      <div class="flex p-8 px-64">
        <div class="w-1/6">
          <img class="rounded-full" src="@/assets/images/headshot.jpg" alt="" />
        </div>
        <div class="pl-6 flex flex-col w-5/6">
          <h1 class="text-2xl font-bold text-white">About Me</h1>
          <p class="text-gray-400">
            A 2021 computer science graduate from the University of Guelph who
            embraces challenges in programming and has a strong passion for the
            realm of information technology. Has been programming for over 7
            years, in C, Python, Javascript, and Java, with industry experience
            working in C#, and SQL.
          </p>
          <h1 class="text-2xl font-bold text-white pt-3">Contact</h1>
          <div class="grid grid-cols-8 text-gray-400">
            <span class="font-medium">Email:</span
            ><span class="col-span-7">alexbmoreira@gmail.com</span>
            <span class="font-medium">Phone:</span
            ><span class="col-span-7">(416) 433-6886</span>
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
