<template>
  <section class="antialiased min-h-screen flex flex-col justify-between">
    <Navigation />

    <div
      class="mx-auto my-8 h-fit px-3 md:max-w-6xl xl:px-0 2xl:max-w-7xl z-0 mt-20"
    >
      <router-view />
    </div>

    <Footer />
  </section>
</template>

<script>
/*components*/
import Footer from "../Pages/Footer.vue";
import Navigation from "../Pages/Navigation.vue";
export default {
  name: "UserLayout",
  components: {
    Footer,
    Navigation,
  },
};
</script>
