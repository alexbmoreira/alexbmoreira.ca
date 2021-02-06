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
            github_link="alexbmoreira.ca"
            :stack="[{'name': 'vue', 'paths': 2},
            {'name': 'tailwindcss', 'paths': 0}]"
            image="alexbmoreira.jpg" />
        <Project
            name="Filler"
            desc="A clone of the iOS GamePigeon Filler game. My sister loves playing this game with her friends over iMessage, so I made a version online that she could play when none of her friends can."
            github_link="filler"
            website="https://playfiller.herokuapp.com/"
            :stack="[{'name': 'python', 'paths': 2},
            {'name': 'javascript', 'paths': 2},
            {'name': 'html5', 'paths': 4},
            {'name': 'css3', 'paths': 4}]"
            image="filler.jpg" />
        <Project
            name="Movie Matching App"
            desc="A work-in-progress web app that will allow users to add their friends, as well as search for and add movies to a watchlist. The app will decide what to watch with their friends based on matches from a swipeable UI not unlike most dating apps."
            github_link="movie-match"
            :stack="[{'name': 'python', 'paths': 2},
            {'name': 'django', 'paths': 0},
            {'name': 'postgresql', 'paths': 4},
            {'name': 'vue', 'paths': 2},
            {'name': 'tailwindcss', 'paths': 0}]"
            image="moviematch.jpg"  />
        <Project
            name="Namaste"
            desc="A simple yoga sequence builder put together over a weekend for the 2020 Winter Hacklympics hackathon. Coded with a partner in Django and Vue.js."
            github_link="yoga-app"
            website="https://namaste-22f27.web.app/"
            devpost="https://devpost.com/software/namaste-q1j6gk"
            :stack="[{'name': 'python', 'paths': 2},
            {'name': 'django', 'paths': 0},
            {'name': 'postgresql', 'paths': 4},
            {'name': 'vue', 'paths': 2},
            {'name': 'css3', 'paths': 4}]"
            image="namaste.jpg" />
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
