<template>
    <div class="flex mb-16">
        <div class="w-1/3 bg-black mr-6"></div>
        <div class="flex flex-col w-2/3">
            <div class="flex items-center justify-between">
                <span class="text-2xl font-bold">{{ name }}</span>
                <a :href="getGithubLink()">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <p class="text-justify">{{ desc }}</p>
            <div class="flex space-x-4">
                <div v-for="(tech, index) in stack" :key="index">
                    <img class="h-8 mt-2" :src="getTechLogo(tech)" alt="">
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
        link: String,
        stack: Array,
    },
    methods: {
        getGithubLink() {
            return `https://github.com/alexbmoreira/${this.link}`
        },
        getTechLogo(tech) {
            return require(`@/assets/images/tech_logos/${tech}.png`)
        }
    },
}
</script>

<style>
</style>