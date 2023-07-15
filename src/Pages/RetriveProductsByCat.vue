<template>
  <section>
    <div class="grid w-full grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-5">
      <ProductInfo
        v-for="product in productsByCategory"
        :key="product.id"
        :productDetails="product"
      />
    </div>
  </section>
</template>

<script>
import ProductInfo from "../components/Global/ProductInfo.vue";
import { useProductsByCategory } from "../store/productsbycat";

export default {
  name: "ProductsByCategory",
  components: {
    ProductInfo,
  },
  setup() {
    const { productsByCategory } = useProductsByCategory();
    return {
      productsByCategory,
    };
  },
};
</script>
