<template>
    <div class="flex flex-col mb-16">
        <div class="flex mb-3 pb-3 border-b-2">
            <div class="w-1/12 sm:w-1/6 mr-5">
                <img class="rounded" :src="getSchoolLogo()" alt="">
            </div>
            <div class="flex flex-col">
                <span class="text-2xl font-bold">{{ school }}</span>
                <span class="text-sm italic text-gray-500">{{ grad }}</span>
            <span class="text-lg">{{ degree }}</span>
            </div>     
        </div>
        <ul>
           <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Education",
    data() {
        return {}
    },
    props: {
        school: String,
        degree: String,
        grad: String,
        image: String,
        notes: Array,
    },
    methods: {
        getSchoolLogo() {
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