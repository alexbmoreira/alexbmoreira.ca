<template>
  <div id="portfolio" class="bg-gray-200 flex">
    <div class="mx-auto md:px-6">
      <div class="flex p-8 px-64 xl:px-24 md:px-12 flex-col sm:px-6">
        <div class="mx-auto mb-8 text-center">
          <span class="font-bold text-3xl border-b-2 border-gray-400">
            Portfolio
          </span>
          <p class="mt-3">A small collection of notable personal projects.</p>
          <p>
            For more, check out my
            <a
              class="text-blue-500 hover:underline"
              href="https://github.com/alexbmoreira"
            >
              Github!
            </a>
          </p>
        </div>
        <Project
          v-for="(project, index) in projects"
          :name="project.name"
          :desc="project.desc"
          :github_link="project.github_link"
          :webiste="project.webiste"
          :devpost="project.devpost"
          :stack="project.stack"
          :deploy="project.deploy"
          :image="project.image"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project";
import projects from "@/api/projects";

export default {
  name: "Portfolio",
  components: {
    Project
  },
  data() {
    return {
      projects
    };
  }
};
</script>

<style></style>
