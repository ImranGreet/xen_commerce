<script>
import ProductsGallery from "../components/Global/ProductsGallery.vue";
import SortProducts from "../components/Products/SortProduct.vue";
import showCaretedAndWished from "../components/Modal/showCaretedAndWished.vue";
/*state or data*/
import { useCategoryStore } from "../store/category";

/*end state or data*/

export default {
  name: "HomeView",
  components: { ProductsGallery, SortProducts, showCaretedAndWished },
  setup() {
    const { availableCategories } = useCategoryStore();

    return { availableCategories };
  },
};
</script>

<template>
  <section class="flex flex-col items-center justify-between gap-y-12">
    <div v-for="cat in availableCategories" :key="cat" class="space-y-6">
      <h1 class="text-xl font-semibold uppercase leading-7 tracking-wider">
        {{ cat }}
      </h1>
      <ProductsGallery :category="cat"></ProductsGallery>
    </div>
  </section>
</template>
