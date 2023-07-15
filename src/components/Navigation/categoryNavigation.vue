<template>
  <section
    class="hidden w-full items-center justify-between px-10 py-2.5 xl:flex"
  >
    <router-link
      class="uppercase tracking-wide"
      :to="{ name: 'category', params: { category: cat } }"
      v-for="cat in availableCategories"
      :key="cat"
    >
      {{ cat }}
    </router-link>

    <router-link class="uppercase tracking-wide" :to="{ name: 'storehouse' }">
      Our Products
    </router-link>

    <router-link class="uppercase tracking-wide" :to="{ name: 'Login' }">
      Login
    </router-link>

    <router-link class="uppercase tracking-wide" :to="{ name: 'Registration' }">
      Registration
    </router-link>
  </section>
</template>

<script>
import { useCategoryStore } from "../../store/category";

export default {
  name: "CategoryNavigation",
  setup() {
    const { availableCategories, categories } = useCategoryStore();

    return { availableCategories, categories };
  },
};
</script>
