<template>
  <div id="portfolio" class="bg-platinum flex">
    <div class="flex p-8 px-64 xl:px-24 md:px-12 flex-col sm:px-6">
      <div class="mx-auto mb-8 text-center">
        <span class="font-bold text-3xl border-b-2 border-steel">
          Portfolio
        </span>
        <p class="mt-3">A small collection of notable personal projects.</p>
        <p>
          For more, check out my
          <a
            class="text-cornflower hover:underline"
            href="https://github.com/alexbmoreira"
            target="_blank"
          >
            Github!
          </a>
        </p>
      </div>
      <Project
        v-for="(project, index) in projects.filter(p => !p.wip)"
        :name="project.name"
        :desc="project.desc"
        :github_link="project.github_link"
        :website="project.website"
        :stack="project.stack"
        :deploy="project.deploy"
        :image="project.image"
        :key="index"
      />
      <div class="mx-auto mb-6 text-center">
        <span class="font-bold text-xl border-b-2 border-steel">
          Work in Progress
        </span>
      </div>
      <Project
        v-for="(project, index) in projects.filter(p => p.wip)"
        :id="project.id"
        :name="project.name"
        :desc="project.desc"
        :github_link="project.github_link"
        :website="project.website"
        :stack="project.stack"
        :deploy="project.deploy"
        :image="project.image"
        :key="index"
      />
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
