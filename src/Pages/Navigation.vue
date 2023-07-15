<template>
  <div
    class="shadow-lg w-full py-2 lg:py-0 fixed left-0 right-0 z-50 bg-slate-300"
  >
    <SearchAndCartNav />
  </div>
</template>

<script>
import SearchAndCartNav from "../components/Navigation/SearchAndCartNav.vue";
import CategoryNavigation from "../components/Navigation/categoryNavigation.vue";
import SearchNavigationSmall from "../components/Navigation/searchNavigationSmall.vue";

import { useCategoryStore } from "../store/category";
export default {
  name: "Navigation",
  components: { SearchAndCartNav, CategoryNavigation, SearchNavigationSmall },
  setup() {
    const { availableCategories } = useCategoryStore();

    return { availableCategories };
  },
};
</script>
