<template>
  <section class="bg-slate-800 text-white">
    <FooterPartOne />
    <FooterPartTwo />
  </section>
</template>

<script>
import FooterPartOne from "../components/Footer/FooterPartOne.vue";
import FooterPartTwo from "../components/Footer/FooterPartTwo.vue";
export default {
  name: "Footer",
  components: { FooterPartOne, FooterPartTwo },
};
</script>

<style></style>
