<template>
  <div class="flex mb-16 sm:flex-col">
    <div v-if="image" class="w-1/3 mr-6 md:w-1/2 md:mb-2 sm:w-full">
      <img class="shadow-lg" :src="getProjectImage()" alt="" />
    </div>
    <div
      :class="
        `flex flex-col justify-between ${
          image ? 'w-2/3 md:w-1/2 sm:w-full' : 'w-full'
        }`
      "
    >
      <div>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold mb-3">{{ name }}</span>
          <div class="flex space-x-3">
            <a
              v-if="website"
              :href="website"
              target="_blank"
              class="text-2xl transition duration-400 ease-in-out hover:text-cornflower"
            >
              <i class="fas fa-link align-top"></i>
            </a>
            <a
              :href="getGithubLink()"
              target="_blank"
              class="text-2xl transition duration-400 ease-in-out hover:text-cornflower"
            >
              <i class="fab fa-github align-top"></i>
            </a>
          </div>
        </div>
        <p class="text-justify mb-3">{{ desc }}</p>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center space-x-3 text-2xl">
          <a
            v-for="(icon, index) in stack"
            :key="index"
            :class="
              `relative has-tooltip fa-kit ${icon.class} ${icon.color} cursor-pointer`
            "
            :href="icon.link"
            target="_blank"
          >
            <span
              class="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap rounded shadow-sm p-2 text-sm font-quicksand bg-indigo text-snow"
            >
              {{ icon.name }}
            </span>
          </a>
        </div>
        <div class="flex items-center space-x-3 text-2xl sm:justify-end">
          <a
            v-for="(icon, index) in deploy"
            :key="index"
            :class="
              `relative has-tooltip fa-kit ${icon.class} ${icon.color} cursor-pointer`
            "
            :href="icon.link"
            target="_blank"
          >
            <span
              class="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap rounded shadow-sm p-2 text-sm font-quicksand bg-indigo text-snow"
            >
              {{ icon.name }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {};
  },
  props: {
    name: String,
    desc: String,
    github_link: String,
    website: String,
    stack: Array,
    deploy: Array,
    image: String
  },
  methods: {
    getGithubLink() {
      return `https://github.com/alexbmoreira/${this.github_link}`;
    },
    getProjectImage() {
      return require(`@/assets/images/project_images/${this.image}`);
    }
  }
};
</script>

<style></style>
