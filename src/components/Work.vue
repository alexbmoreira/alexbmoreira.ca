<template>
    <div class="flex flex-col mb-16">
        <div class="flex mb-2">
            <div class="w-1/12 sm:w-1/6 mr-5">
                <img class="rounded-full" :src="getCompanyLogo(image)" alt="">
            </div>
            <div class="flex flex-col">
                <span class="text-2xl font-bold">{{ company }}</span>
                <span class="text-sm italic text-gray-500">{{ time }}</span>
                <div class="flex justify-between sm:flex-col mb-4">
                </div>
            </div>     
        </div>
        <span class="text-lg mb-3 border-b-2">{{ role }}</span>
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
        getCompanyLogo(image) {
            return require(`@/assets/images/company_logos/${image}`)
        }
    },
}
</script>

<style>
    ul {
        list-style: outside;
    }
</style>