<template>
  <section
    :class="{
      'min-h-screen': noFlex,
      'flex flex-col justify-between min-h-screen': !noFlex,
    }"
  >
    <SearchAndCartNav />
    <NavigationMenu :class="{ block: discloseModal, hidden: !discloseModal }" />
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
/*components*/
import SearchAndCartNav from "../components/Navigation/SearchAndCartNav.vue";
import Footer from "../Pages/Footer.vue";
import NavigationMenu from "../components/modal/Navigation-menu.vue";

/*compositon api*/
import { discloseModal, fullWidth, noFlex } from "../script/utility/layout";

export default {
  name: "UserLayout",
  components: {
    SearchAndCartNav,
    Footer,
    NavigationMenu,
  },
  setup() {
    return {
      fullWidth,
      noFlex,
      discloseModal,
      /*methods*/
    };
  },
};
</script>
