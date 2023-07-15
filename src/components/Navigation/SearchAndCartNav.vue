<template>
  <router-link :to="{ name: 'Home' }" class="uppercase lg:hidden block">
    xenmesh
  </router-link>
  <section
    class="flex w-full lg:w-11/12 mx-auto justify-between px-2 lg:py-3 lg:gap-x-12 z-50"
  >
    <!-- category start -->
    <div
      class="lg:flex justify-between items-center gap-x-6 w-1/2 lg:w-3/4 hidden"
    >
      <router-link :to="{ name: 'Home' }" class="uppercase">
        xenmesh
      </router-link>

      <router-link
        v-for="cat in availableCategories"
        :key="cat"
        :to="{ name: 'category', params: { category: cat } }"
        class="uppercase"
        >{{ cat }}</router-link
      >

      <router-link class="uppercase tracking-wide" :to="{ name: 'storehouse' }">
        Our Products
      </router-link>

      <router-link class="uppercase tracking-wide" :to="{ name: 'Login' }">
        Login
      </router-link>

      <router-link
        class="uppercase tracking-wide"
        :to="{ name: 'Registration' }"
      >
        Registration
      </router-link>
    </div>
    <!-- category end -->

    <div class="flex justify-center lg:justify-between w-1/2 lg:w-[10%]">
      <router-link to="#" class="text-xl flex justify-center items-center">
        <span class="font-serif text-xl">
          <font-awesome-icon icon="fa-regular fa-heart" />
        </span>
        ({{ amountOfWishedItems.length }})
      </router-link>

      <router-link
        :to="{ name: 'cart' }"
        class="text-xl flex justify-center items-center"
      >
        <span class="font-serif text-xl">
          <font-awesome-icon icon="fa-solid fa-cart-plus" />
        </span>
        ({{ amountOfCartedItems.length }})
      </router-link>

      <router-link
        to="#"
        class="hidden lg:flex h-8 w-8 flex-col items-center justify-center rounded-full bg-gray-700 text-white"
      >
        <span class="text-xl">I</span>
      </router-link>
      <button class="text-purple-900 rounded block lg:hidden cursor-pointer">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
  </section>
</template>

<script>
import {
  amountOfCartedItems,
  amountOfWishedItems,
} from "../../script/Cart/purchase";

import { useCategoryStore } from "../../store/category";

/*components*/
import showCaretedAndWishedVue from "../Cart/showCaretedAndWished.vue";
import ShowCaretedAndWished from "../Cart/showCaretedAndWished.vue";
import category from "../Utility/category.vue";

export default {
  name: "SearchAndCartNav",
  components: { category, ShowCaretedAndWished, showCaretedAndWishedVue },

  setup() {
    /*category*/
    const { availableCategories } = useCategoryStore();
    return {
      amountOfCartedItems,
      amountOfWishedItems,
      /*categories*/
      availableCategories,
    };
  },
};
</script>
