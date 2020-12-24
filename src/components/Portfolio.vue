<template>
    <div class="bg-gray-200 flex">
        <div class="mx-auto">
            <div class="flex p-8 px-64 xl:px-24 md:px-12 flex-col sm:px-6">
                <div class="mx-auto mb-8">
                    <span class="font-bold text-3xl border-b-2 border-gray-400">Portfolio</span>
                </div>
                <Project
                name="alexmoreira.ca"
                desc="The website you're on right now! I show it off since it was designed and coded entirely by myself using Vue.js and TailwindCSS. No templates or downloaded code so that I could build on my front-end development skills."
                link="alexbmoreira.ca"
                :stack="[{'name': 'vuejs', 'color': 'text-green-500'},
                {'name': 'css3-alt', 'color': 'text-blue-400'}]" />
                <Project
                name="Filler"
                desc="A clone of the iOS GamePigeon Filler game. My sister loves playing this game with her friends over iMessage, so I made a version online that she could play when none of her friends can."
                link="filler"
                :stack="[{'name': 'python', 'color': 'text-blue-700'},
                {'name': 'js-square', 'color': 'text-yellow-300'},
                {'name': 'html5', 'color': 'text-yellow-600'},
                {'name': 'css3-alt', 'color': 'text-blue-400'}]" />
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