<script>
import FooterPartOne from "../Footer/FooterPartOne.vue";
import FooterPartTwo from "../Footer/FooterPartTwo.vue";
export default {
  name: "Footer",
  components: { FooterPartOne, FooterPartTwo },
};
</script>

<template>
  <section class="bg-slate-800 text-white">
    <FooterPartOne />
    <FooterPartTwo />
  </section>
</template>
