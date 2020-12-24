<template>
    <div class="flex flex-col mb-16">
        <div class="flex mb-3 pb-3 border-b-2">
            <div class="w-1/12 sm:w-1/6 mr-5">
                <img class="rounded" :src="getLogo()" alt="">
            </div>
            <div class="flex flex-col">
                <span class="text-2xl font-bold">{{ org }}</span>
                <span class="text-sm italic text-gray-500">{{ time }}</span>
            <span class="text-lg">{{ role }}</span>
            </div>     
        </div>
        <ul>
           <li v-for="(note, index) in notes" :key="index">• {{ note }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Term",
    data() {
        return {}
    },
    props: {
        org: String,
        role: String,
        time: String,
        image: String,
        notes: Array,
    },
    methods: {
        getLogo() {
            return require(`@/assets/images/company_logos/${this.image}`)
        }
    },
}
</script>

<style>
</style>