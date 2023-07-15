<template>
  <section class="w-full">
    <show-careted-and-wished />
  </section>
</template>

<script>
import showCaretedAndWished from "../../components/Cart/showCaretedAndWished.vue";

export default {
  components: { showCaretedAndWished },
  name: "CartList",
  setup() {
    return {};
  },
};
</script>
