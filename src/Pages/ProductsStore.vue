<template>
  <section>
    <div class="grid w-full grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-5">
      <ProductInfo
        v-for="product in allProducts"
        :key="product.id"
        :productDetails="product"
      />
    </div>
  </section>
</template>

<script>
import ProductInfo from "../components/Global/ProductInfo.vue";
import { useProductsStore } from "../store/productstore";
/*composables*/
const { allProducts } = useProductsStore();
export default {
  name: "ProductsStore",
  components: { ProductInfo },
  setup() {
    return {
      allProducts,
    };
  },
};
</script>
