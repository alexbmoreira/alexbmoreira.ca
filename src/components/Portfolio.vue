<template>
  <div id="portfolio" class="bg-gray-200 flex">
    <div class="mx-auto md:px-6">
      <div class="flex p-8 px-64 xl:px-24 md:px-12 flex-col sm:px-6">
        <div class="mx-auto mb-8 text-center">
          <span class="font-bold text-3xl border-b-2 border-gray-400"
            >Portfolio</span
          >
          <p class="mt-3">A small collection of notable personal projects.</p>
          <p>
            For more, check out my
            <a
              class="text-blue-500 hover:underline"
              href="https://github.com/alexbmoreira"
              >Github!</a
            >
          </p>
        </div>
        <Project
          name="alexbmoreira.ca"
          desc="This site was designed and built myself using Vue.js and Tailwind. I made it to display the skills and experience on my resume in a more appealing way, as well as to highlight notable personal projects that aren't listed on there."
          link="alexbmoreira.ca"
          :stack="[
            { name: 'vuejs', color: 'text-green-500' },
            { name: 'css3-alt', color: 'text-blue-400' }
          ]"
          image="alexbmoreira.jpg"
        />
        <Project
          name="Filler"
          desc="A clone of the iOS GamePigeon Filler game. My sister loves playing this game with her friends over iMessage, so I made a version online that she could play when none of her friends can."
          link="filler"
          :stack="[
            { name: 'python', color: 'text-blue-700' },
            { name: 'js-square', color: 'text-yellow-300' },
            { name: 'html5', color: 'text-yellow-600' },
            { name: 'css3-alt', color: 'text-blue-400' }
          ]"
          image="filler.jpg"
        />
        <Project
          name="Namaste"
          desc="A simple yoga sequence builder put together over a weekend for the 2020 Winter Hacklympics hackathon. Coded with a partner in Django and Vue.js."
          link="yoga-app"
          devpost="https://devpost.com/software/namaste-q1j6gk"
          :stack="[
            { name: 'python', color: 'text-blue-700' },
            { name: 'vuejs', color: 'text-green-500' },
            { name: 'css3-alt', color: 'text-blue-400' }
          ]"
          image="namaste.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project";

export default {
  name: "Portfolio",
  components: {
    Project
  },
  data() {
    return {};
  }
};
</script>

<style></style>
