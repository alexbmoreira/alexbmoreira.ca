<template>
    <div class="absolute bottom-0 flex w-full pb-5 sm:pb-2">
        <div class="grid grid-cols-4 text-white text-lg font-bold w-full text-center sm:text-2xs">
            <div class="flex flex-col">
                <span class="invisible sm:visible sm:text-xl"><i class="fas fa-info-circle"></i></span>
                <a href="#about"><span class="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-600">About</span></a>
            </div>
            <div class="flex flex-col">
                <span class="invisible sm:visible sm:text-xl"><i class="fas fa-briefcase"></i></span>
                <a href="#experience"><span class="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-600">Experience</span></a>
            </div>
            <div class="flex flex-col">
                <span class="invisible sm:visible sm:text-xl"><i class="fas fa-graduation-cap"></i></span>
                <a href="#education"><span class="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-600">Education</span></a>
            </div>
            <div class="flex flex-col">
                <span class="invisible sm:visible sm:text-xl"><i class="fas fa-code"></i></span>
                <a href="#portfolio"><span class="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-600">Portfolio</span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            
        }
    },
}
</script>

<style>
    
</style>