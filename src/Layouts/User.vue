<template>
  <section class="max-w-7xl mx-auto">
    <LanguageSelection></LanguageSelection>
  </section>
</template>

<script>
/*components*/
import Footer from "../Pages/Footer.vue";
import Navigation from "../Pages/Navigation.vue";
import NavigationMenu from "../components/modal/Navigation-menu.vue";
import LanguageSelection from "../components/modal/Language-selection.vue";

export default {
  name: "UserLayout",
  components: {
    Footer,
    Navigation,
    NavigationMenu,
    LanguageSelection,
  },
};
</script>
