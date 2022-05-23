<template>
  <div id="experience" class="bg-white flex">
    <div class="m-auto">
      <div class="flex flex-col p-8 px-64 xl:px-24 md:px-12 sm:px-6">
        <div class="mx-auto mb-8">
          <span class="font-bold text-3xl border-b-2 border-gray-400">
            Experience
          </span>
        </div>
        <div class="pl-6 md:px-6 md:mx-auto">
          <Term
            v-for="(term, index) in work_terms"
            :org="term.org"
            :role="term.role"
            :time="term.time"
            :image="term.image"
            :notes="term.notes"
            :key="index"
          />
        </div>
        <div id="education" class="mx-auto py-8">
          <span class="font-bold text-3xl border-b-2 border-gray-400">
            Education
          </span>
        </div>
        <div class="pl-6 md:px-6 md:mx-auto">
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
import work_terms from "@/api/work_terms";

export default {
  name: "Resume",
  components: {
    Term
  },
  data() {
    return {
      work_terms
    };
  }
};
</script>

<style></style>
