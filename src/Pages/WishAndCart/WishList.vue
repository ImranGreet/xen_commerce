<template>
  <section>
    <WishProducts />
  </section>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import WishProducts from "../../components/Cart/wishProducts.vue";
import {
  closeWishButton,
  discloseWishButton,
} from "../../script/utility/layout";

export default {
  name: "Wishlist",
  components: {
    WishProducts,
  },
  setup() {
    onMounted(() => discloseWishButton());
    onUnmounted(() => closeWishButton());
    return {};
  },
};
</script>
