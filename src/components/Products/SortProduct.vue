<script>
import { onMounted } from "vue";
import { useSortProducts } from "../../store/sortProduct";
import ProductInfo from "../Global/ProductInfo.vue";
import ProductsGallery from "../Global/ProductsGallery.vue";

export default {
  name: "SortProducts",
  components: { ProductsGallery, ProductInfo },
  setup() {
    const { sortedProducts, retrieveProducts } = useSortProducts();

    return {
      sortedProducts,
      retrieveProducts,
    };
  },
};
</script>

<template>
  <section class="relative">
    <h1 class="text-xl font-semibold uppercase leading-7 tracking-wider">
      Products in Sort
    </h1>
    <div
      class="grid w-full grid-cols-1 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    >
      <ProductInfo
        v-for="product in sortedProducts"
        :key="product.id"
        :productDetails="product"
      />
    </div>

    <button
      class="absolute -left-2 top-14 z-20 flex h-6 w-6 flex-col items-center justify-center rounded-full bg-gray-700 text-xl text-white shadow-md shadow-pink-200 md:h-8 md:w-8 lg:h-10 lg:w-10 lg:hover:bg-stone-900 lg:hover:shadow-pink-200/50 xl:-left-4 xl:h-12 xl:w-12"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>

    <button
      class="absolute -right-2 top-14 z-20 flex h-6 w-6 flex-col items-center justify-center rounded-full bg-gray-700 text-xl text-white shadow-md shadow-pink-200 md:h-8 md:w-8 lg:h-10 lg:w-10 lg:hover:bg-stone-900 lg:hover:shadow-pink-200/50 xl:-right-5 xl:h-12 xl:w-12"
    >
      <span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
    </button>
  </section>
</template>
