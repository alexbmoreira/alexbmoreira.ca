<template>
  <div class="flex flex-col mb-16 self-center w-full">
    <div class="flex mb-3 pb-3 border-b-2">
      <div class="w-1/12 sm:w-1/6 mr-5">
        <img class="rounded" :src="getLogo()" alt="" />
      </div>
      <div class="flex flex-col w-full">
        <span class="text-2xl font-bold">{{ org }}</span>
        <span class="text-sm italic text-gray-500">{{ time }}</span>
        <div class="flex justify-between items-start">
          <span class="text-lg">{{ role }}</span>
          <span
            v-if="collapsible"
            class="text-lg text-gray-500 cursor-pointer"
            @click="toggleCollapse"
          >
            <i v-if="collapsed" class="fas fa-plus"></i>
            <i v-else class="fas fa-minus"></i>
          </span>
        </div>
      </div>
    </div>
    <div v-show="!collapsed">
      <ul>
        <li v-for="(note, index) in notes" :key="index">• {{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Term",
  data() {
    return {};
  },
  props: {
    org: String,
    role: String,
    time: String,
    image: String,
    notes: Array,
    collapsible: Boolean,
    collapsed: Boolean
  },
  methods: {
    getLogo() {
      return require(`@/assets/images/company_logos/${this.image}`);
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style></style>
