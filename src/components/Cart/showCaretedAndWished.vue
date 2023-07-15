<template>
  <section class="flex justify-between gap-x-48">
    <div class="w-full divide-y-2 divide-stone-400/20">
      <div class="text-center lg:text-start">
        <h2 class="text-xl">Shopping Cart</h2>
        <p v-if="cartedList.length > 0" class="text-lg tracking-wide">
          {{ cartedList.length }} Items in The cart
        </p>
        <p v-else class="text-lg tracking-wide">Cart Empty</p>
      </div>

      <cartProduct />
    </div>
    <cart-price />
  </section>
</template>

<script>
import { cartedList } from "../../script/Cart/purchase";
import CartPrice from "./CartPrice.vue";
import cartProduct from "./cartProduct.vue";

export default {
  name: "showCartedAndWished",
  components: {
    cartProduct,
    CartPrice,
  },
  setup() {
    return {
      cartedList,
    };
  },
};
</script>
