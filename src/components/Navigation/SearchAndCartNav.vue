<template>
  <section class="relative">
    <div
      class="flex w-full px-6 py-5 items-center lg:mx-auto justify-between shadow-md"
    >
      <div class="block lg:hidden">
        <button class="text-gray-900 rounded cursor-pointer">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
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

        <router-link
          class="uppercase tracking-wide"
          :to="{ name: 'storehouse' }"
        >
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

      <div class="flex justify-center lg:justify-between">
        <router-link
          @mouseover="modalShow = true"
          @mouseout="modalShow = false"
          :to="{ name: 'wish' }"
          class="text-xl flex justify-center items-center"
        >
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
      </div>
    </div>
  </section>
</template>

<script>
import {
  amountOfCartedItems,
  amountOfWishedItems,
} from "../../script/Cart/purchase";

/*state*/

import { useCategoryStore } from "../../store/category";

/*components*/

import CartView from "../modal/cartView.vue";
import WishView from "../modal/WishView.vue";
import CartAndWishItemsContainer from "../universal/CartAndWishItemsContainer.vue";

export default {
  name: "SearchAndCartNav",
  components: {
    CartView,
    WishView,
    CartAndWishItemsContainer,
  },

  setup() {
    /*category*/
    const { availableCategories } = useCategoryStore();
    let modalShow = false;

    return {
      amountOfCartedItems,
      amountOfWishedItems,
      /*categories*/
      availableCategories,
      /*modal*/
      modalShow,
    };
  },
};
</script>
