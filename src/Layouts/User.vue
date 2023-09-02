<template>
  <section class="min-h-screen">
    <SearchAndCartNav />
    <div
      :class="{
        'max-w-7xl mx-auto ': !fullWidth,
        'max-w-full mx-auto': fullWidth,
      }"
    >
      <router-view></router-view>
    </div>
    <Footer />
  </section>
</template>

<script>
import SearchAndCartNav from "../components/Navigation/SearchAndCartNav.vue";
import Footer from "../Pages/Footer.vue";
import { fullWidth } from "../script/utility/layout";

export default {
  name: "UserLayout",
  components: {
    SearchAndCartNav,
    Footer,
  },
  setup() {
    return {
      fullWidth,
    };
  },
};
</script>
