<script>
import { computed } from "vue";

import ProductInfo from "../Global/ProductInfo.vue";

/*state */
import { useProductsStore } from "../../store/productstore";
/*end store*/
export default {
  name: "ProductGallery",
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  components: {
    ProductInfo,
  },

  setup(props) {
    const { allProducts, products } = useProductsStore();
    const productsByCategory = computed(() =>
      allProducts
        .filter((product) => product.category === props.category)
        .slice(0, 5)
    );

    return {
      productsByCategory,
    };
  },
};
</script>

<template>
  <section class="relative">
    <div
      class="grid w-full grid-cols-1 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    >
      <ProductInfo
        v-for="product in productsByCategory"
        :key="product"
        :productDetails="product"
      />
    </div>
  </section>
</template>
