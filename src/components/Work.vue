<template>
    <div class="flex flex-col mb-16">
        <div class="flex mb-3 pb-3 border-b-2">
            <div class="w-1/12 sm:w-1/6 mr-5">
                <img class="rounded" :src="getCompanyLogo()" alt="">
            </div>
            <div class="flex flex-col">
                <span class="text-2xl font-bold">{{ company }}</span>
                <span class="text-sm italic text-gray-500">{{ time }}</span>
            <span class="text-lg">{{ role }}</span>
            </div>     
        </div>
        <ul>
           <li v-for="(duty, index) in duties" :key="index">{{ duty }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Work",
    data() {
        return {}
    },
    props: {
        company: String,
        role: String,
        time: String,
        image: String,
        duties: Array,
    },
    methods: {
        getCompanyLogo() {
            return require(`@/assets/images/company_logos/${this.image}`)
        }
    },
}
</script>

<style>
    ul {
        list-style: outside;
    }
</style>