<template>
  <section>
    <div
      class="text-start space-y-2 mb-12 bg-purple-700 text-white inline-block px-12 py-5 shadow-xl rounded-md"
    >
      <h1
        v-if="wishedList.length > 0"
        class="text-3xl tracking-wide leading-relaxed"
      >
        You Have {{ wishedList.length }} Wished Items
      </h1>
      <h1 v-else class="text-3xl tracking-wide leading-relaxed">
        You Have No Wished Items
      </h1>
    </div>
    <ProductHouse>
      <ProductInfo
        v-for="wishItem in wishedList"
        :key="wishItem.id"
        :productDetails="wishItem"
      />
    </ProductHouse>
  </section>
</template>

<script>
import { wishedList } from "../../script/Cart/purchase";
import ProductHouse from "../Global/ProductHouse.vue";

export default {
  name: "WishProducts",
  components: {
    ProductHouse,
  },
  setup() {
    return { wishedList };
  },
};
</script>

<style></style>
