<script>
import cartItemView from "../components/Buy/CartItemView.vue";
import TotalPrice from "../components/Utility/TotalPrice.vue";
export default {
  name: "CartItems",
  components: { cartItemView, TotalPrice },
  setup() {},
};
</script>

<template>
  <section class="w-full">
    <div
      class="relative flex w-full flex-col-reverse items-center justify-center gap-x-2 md:flex-row"
    >
      <div class="w-full">
        <cartItemView />
        <cartItemView />
        <cartItemView />
        <cartItemView />
      </div>
      <TotalPrice class="md:absolute md:top-0 md:right-0" />
    </div>
  </section>
</template>
