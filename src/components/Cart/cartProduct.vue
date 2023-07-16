<template>
  <div
    class="w-[650px] flex justify-between items-start gap-x-3 py-3"
    v-for="cartItem in cartedList"
    :key="cartItem.id"
  >
    <div class="flex justify-start items-start gap-x-2">
      <img :src="cartItem.image" alt="" class="w-36 h-24 rounded-sm" />
      <!-- product info in text -->
      <div>
        <h1 v-if="cartItem.title.length > 30">
          {{ cartItem.title.slice(0, 30) }} ...
        </h1>
        <h1 v-else>{{ cartItem.title }}</h1>
        <small>{{ cartItem.category }}</small>
      </div>
      <!-- product info in text end -->
    </div>
    <!-- functionality start -->
    <div class="flex justify-between gap-x-3">
      <div class="flex flex-col justify-start items-start">
        <cartUtility>Remove</cartUtility>
        <cartUtility>Move To Wish</cartUtility>
        <cartUtility>Save For Later</cartUtility>
      </div>
      <!-- price -->
      <div>
        <h1 class="text-purple-700 text-xl tracking-wider font-semibold">
          $ {{ cartItem.price }}
        </h1>
      </div>
    </div>
    <!-- functionally end -->
  </div>
</template>

<script>
import { cartedList } from "../../script/Cart/purchase";

export default {
  name: "CartProduct",
  setup() {
    return {
      cartedList,
    };
  },
};
</script>


