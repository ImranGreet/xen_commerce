<template>
  <ProductHouse>
    <ProductInfo
      v-for="wishItem in wishedList"
      :key="wishItem.id"
      :productDetails="wishItem"
    />
  </ProductHouse>
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
