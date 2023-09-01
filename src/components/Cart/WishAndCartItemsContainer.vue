<template>
  <container>
    <cart-view></cart-view>
    <cart-view></cart-view>
    <cart-view></cart-view>
   
  </container>
</template>

<script>
import CartView from "./cartView.vue";
import Container from "./Container.vue";
export default {
  components: { Container, CartView },
  name: "WishAndCartedItemsContainer",
};
</script>

<style></style>
