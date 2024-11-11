<template>
  <div id="about" class="bg-indigo flex">
    <div class="m-auto">
      <div class="flex p-8 px-64 xl:px-24 md:px-12 md:flex-col sm:px-6">
        <div class="w-1/6 md:mx-auto md:w-1/4 sm:w-1/2">
          <img class="rounded-full" src="@/assets/images/headshot.jpg" alt="" />
        </div>
        <div class="pl-6 flex flex-col w-5/6 md:pl-0 md:w-full">
          <h1 class="text-2xl font-bold text-snow">About Me</h1>
          <p class="text-platinum text-justify">
            As a software developer with 2 years of experience working in Ruby
            on Rails and React, I've built a strong foundation in modern web
            both front-end and back-end development. I am passionate about
            computing and am always looking for ways to improve and expand my
            knowledge and skills. In my current role, I have been able to
            successfully develop and deliver on a number of complex projects,
            and I am excited to continue learing and growing in my field.
          </p>
          <h1 class="text-2xl font-bold text-snow pt-3">Contact</h1>
          <div class="flex flex-col text-platinum">
            <a href="mailto:alexbmoreira@gmail.com">
              <span class="transition duration-400 ease-in-out hover:text-snow">
                <i class="fas fa-envelope mr-2"></i>alexbmoreira@gmail.com
              </span>
            </a>
            <a href="tel:+14164336886">
              <span class="transition duration-400 ease-in-out hover:text-snow">
                <i class="fas fa-phone-alt mr-2"></i>(416) 433-6886
              </span>
            </a>
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
