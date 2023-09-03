<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 content-between py-3 px-1.5 lg:px-0"
    v-for="cartItem in cartedList"
    :key="cartItem.id"
  >
    <img
      :src="cartItem.image"
      alt=""
      class="w-4/5 mx-auto sm:w-36 aspect-square lg:aspect-auto lg:h-24 rounded-sm place-self-start"
    />
    <!-- product info in text -->
    <div class="">
      <h1 v-if="cartItem.title.length > 30">
        {{ cartItem.title.slice(0, 30) }} ...
      </h1>
      <h1 v-else>{{ cartItem.title }}</h1>
      <small class="capitalize">{{ cartItem.category }}</small>
    </div>
    <!-- product info in text end -->

    <div class="flex justify-between lg:gap-x-3 py-2 lg:py-0">
      <div class="flex flex-row sm:flex-col justify-between items-start">
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
  </div>
  <!-- functionality start -->

  <!-- functionally end -->
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import { cartedList } from "../../script/Cart/purchase";
import { applyFlex, applyNoFlex } from "../../script/utility/layout";

export default {
  name: "CartProduct",
  setup() {
    onMounted(() => applyNoFlex());
    onUnmounted(() => applyFlex());
    return {
      cartedList,
      /*methods*/
      applyFlex,
      applyNoFlex,
    };
  },
};
</script>
