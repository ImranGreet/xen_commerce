<template>
  <section class="w-full flex flex-col justify-between gap-y-4 py-2 lg:py-0">
    <div
      class="w-full lg:w-2/5 self-end text-center float-right bg-purple-700 text-white inline-block px-12 py-5 shadow-xl rounded-md font-semibold"
    >
      <h1
        v-if="wishedList.length > 0"
        class="text-2xl tracking-wide leading-relaxed"
      >
        You Have {{ wishedList.length }} Wished Items
      </h1>
      <h1 v-else class="text-2xl tracking-wide leading-relaxed font-semibold">
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
