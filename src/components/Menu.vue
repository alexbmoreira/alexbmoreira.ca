<template>
    <div>
        <div :class="{'scale-100': expand}" class="transform origin-menu rounded bg-black fixed top-4 left-4 p-3 scale-0 sm:p-2 sm:top-2 sm:left-2 transition duration-500 ease-in-out">
            <div class="flex flex-col space-y-2">
                <div class="flex text-white h-full cursor-pointer mb-3 text-2xl sm:text-base" @click="clickMenu()">
                    <i class="fas fa-bars"></i>
                </div>
                <a href="#about"><span class="cursor-pointer text-white text-lg hover:text-blue-600">About</span></a>
                <a href="#experience"><span class="cursor-pointer text-white text-lg hover:text-blue-600">Experience</span></a>
                <a href="#education"><span class="cursor-pointer text-white text-lg hover:text-blue-600">Education</span></a>
                <a href="#portfolio"><span class="cursor-pointer text-white text-lg hover:text-blue-600">Portfolio</span></a>
            </div>
        </div>
        <div class="rounded-full bg-black fixed top-4 left-4 w-12 h-12 sm:w-8 sm:h-8 sm:top-2 sm:left-2">
            <div class="flex justify-center text-white items-center h-full cursor-pointer text-2xl sm:text-base" @click="clickMenu()">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            expand: false
        }
    },
    methods: {
        clickMenu() {
            this.expand = !this.expand
        }
    },
}
</script>

<style>
    
</style>