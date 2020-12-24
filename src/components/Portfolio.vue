<template>
    <div class="bg-gray-200 flex">
        <div class="mx-auto">
            <div class="flex p-8 px-64 xl:px-24 md:px-12 flex-col sm:px-6">
                <div class="mx-auto mb-8">
                    <span class="font-bold text-3xl border-b-2 border-gray-400">Portfolio</span>
                </div>
                <Project />
            </div>
        </div>
    </div>
</template>

<script>
    import Project from "./Project";

    export default {
        name: "Portfolio",
        components: {
            Project
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style>
    
</style>