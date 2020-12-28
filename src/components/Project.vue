<template>
    <div class="flex mb-16 sm:flex-col">
        <div class="w-1/3 mr-6 md:w-1/2 md:mb-2 sm:w-full">
            <img class="shadow-lg" :src="getProjectImage()" alt="">
        </div>
        <div class="flex flex-col w-2/3 md:w-1/2 sm:w-full">
            <div class="flex items-center justify-between">
                <span class="text-2xl font-bold mb-3">{{ name }}</span>
                <div class="flex space-x-3">
                    <a v-if="devpost" :href="devpost" class="text-2xl">
                        <img src="@/assets/images/devpost.png" class="h-6 align-middle">
                    </a>
                    <a v-if="website" :href="website" class="text-2xl transition duration-400 ease-in-out hover:text-blue-600 cursor-pointer">
                        <i class="fas fa-link align-top"></i>
                    </a>
                    <a :href="getGithubLink()" class="text-2xl transition duration-400 ease-in-out hover:text-blue-600">
                        <i class="fab fa-github align-top"></i>
                    </a>
                </div>
            </div>
            <p class="text-justify mb-3">{{ desc }}</p>
            <div class="flex space-x-3">
                <div v-for="(tech, index) in stack" :key="index" :class="`text-3xl ${tech.color}`">
                    <i :class="`fab fa-${tech.name}`"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Project",
    data() {
        return {}
    },
    props: {
        name: String,
        desc: String,
        git_link: String,
        website: String,
        stack: Array,
        devpost: String,
        image: String
    },
    methods: {
        getGithubLink() {
            return `https://github.com/alexbmoreira/${this.git_link}`
        },
        getProjectImage() {
            return require(`@/assets/images/project_images/${this.image}`)
        }
    },
}
</script>

<style>
</style>