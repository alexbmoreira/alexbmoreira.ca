<template>
  <div class="bg-white flex">
    <div class="m-auto w-full">
      <div class="flex flex-col p-8 px-64 xl:px-24 md:px-12 sm:px-6">
        <div id="experience" class="mx-auto mb-8">
          <span class="font-bold text-3xl border-b-2 border-gray-400">
            Experience
          </span>
        </div>
        <div class="flex flex-col">
          <Term
            v-for="(term, index) in workTerms"
            :org="term.org"
            :role="term.role"
            :time="term.time"
            :image="term.image"
            :notes="term.notes"
            :collapsible="term.notes.length > 0"
            :collapsed="index > 1"
            :key="index"
          />
        </div>
        <div id="education" class="mx-auto mb-8">
          <span class="font-bold text-3xl border-b-2 border-gray-400">
            Education
          </span>
        </div>
        <div class="flex flex-col">
          <Term
            org="University of Guelph"
            role="Bachelor of Computer Science, Honors"
            time="Sept. 2017 Apr. 2021"
            image="uoguelph.jpg"
            :notes="['Emphasis in Mathematical Science']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Term from "./Term";
import workTerms from "@/api/work_terms";

export default {
  name: "Resume",
  components: {
    Term
  },
  data() {
    return {
      workTerms
    };
  }
};
</script>

<style></style>
