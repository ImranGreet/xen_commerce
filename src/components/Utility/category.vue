<template>
  <section class="w-64 bg-gray-500/40 px-4 py-2 text-gray-900">
    <div
      class="flex flex-col items-start justify-start gap-y-3 px-3 py-2 rounded"
    >
      <router-link
        class="uppercase tracking-wider text-white"
        :to="{ name: 'category', params: { category: cat } }"
        v-for="cat in availableCategories"
        :key="cat"
      >
        {{ cat }}
        <span class="text-xs hidden hover:block"
          ><font-awesome-icon icon="fa-solid fa-chevron-right"
        /></span>
      </router-link>
    </div>
  </section>
</template>

<script>
import { useCategoryStore } from "../../store/category";

export default {
  name: "category",
  setup() {
    const { availableCategories } = useCategoryStore();
    return {
      availableCategories,
    };
  },
};
</script>
