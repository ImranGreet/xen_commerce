<template>
  <!-- checkout box -->
  <div>
    <h2 class="text-xl tracking-wide font-bold text-gray-700/50">Total</h2>
    <h1 class="text-3xl tracking-wide leading-relaxed font-semibold mb-8">
      $450
    </h1>
    <router-link
      to="#"
      class="bg-purple-700 text-white text-center px-36 py-5 rounded-sm font-semibold tracking-widest"
      >Checkout</router-link
    >
  </div>
</template>

<script>
export default {
  name: "CartPrice",

  setup() {
    return {};
  },
};
</script>
