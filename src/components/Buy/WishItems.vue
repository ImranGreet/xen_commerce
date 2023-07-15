<template>
  <section class="flex flex-col sm:flex-row">
    <ProductInfo
      v-for="product in products"
      :key="product.id"
      :productDetails="product"
    />
  </section>
</template>

<script>
export default {
  name: "WishedItems",

  setup() {
    return {};
  },
};
</script>
