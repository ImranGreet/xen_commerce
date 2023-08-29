<template>
  <section class="min-h-screen flex flex-col justify-between gap-y-2">
    <SearchAndCartNav class="bg-indigo-950 text-white" />
    <div class="max-w-7xl mx-auto">lorem32</div>

    <Footer />
  </section>
</template>

<script>
/*components*/
import SearchAndCartNav from "../components/Navigation/SearchAndCartNav.vue";
import Footer from "../Pages/Footer.vue";
export default {
  name: "UserLayout",
  components: {
    SearchAndCartNav,
    Footer,
  },
};
</script>
