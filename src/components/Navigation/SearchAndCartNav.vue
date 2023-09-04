<template>
  <section class="relative z-10">
    <div
      class="flex w-full py-3 px-2 lg:px-6 lg:py-5 items-center lg:mx-auto justify-between shadow-md"
    >
      <div class="block xl:hidden">
        <button
          @click="discloseModal = !discloseModal"
          class="text-gray-900 rounded cursor-pointer"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>

      <router-link :to="{ name: 'Home' }" class="uppercase">
        xenmesh
      </router-link>

      <!-- category start -->
      <div
        class="xl:flex justify-between items-center gap-x-6 w-1/2 lg:w-3/4 hidden"
      >
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

      <div class="flex justify-center lg:justify-between gap-x-1 lg:gap-x-4">
        <router-link
          @mouseover="showProperty.cartItems = true"
          @mouseout="showProperty.cartItems = false"
          :to="{ name: 'wish' }"
          class="text-xl flex justify-center items-center"
        >
          <span class="font-serif text-xl">
            <font-awesome-icon icon="fa-regular fa-heart" />
          </span>
          ({{ amountOfWishedItems.length }})
        </router-link>

        <router-link
          @mouseenter="showProperty.cartItems = true"
          @mouseover="showProperty.cartItems = true"
          @mouseout="showProperty.cartItems = false"
          :to="{ name: 'cart' }"
          class="text-xl flex justify-center items-center"
        >
          <span class="font-serif text-xl">
            <font-awesome-icon icon="fa-solid fa-cart-plus" />
          </span>
          ({{ amountOfCartedItems.length }})
        </router-link>

        <router-link
          @mouseenter="showProperty.notification = true"
          @mouseover="showProperty.notification = true"
          @mouseout="showProperty.notification = false"
          to="#"
          class="text-xl flex justify-center items-center"
        >
          <span class="font-serif text-xl">
            <font-awesome-icon icon="fa-regular fa-bell" />
          </span>
        </router-link>

        <router-link
          @mouseenter="showProperty.profileView = true"
          @mouseover="showProperty.profileView = true"
          @mouseout="showProperty.profileView = false"
          to="#"
          class="hidden lg:flex h-8 w-8 flex-col items-center justify-center rounded-full bg-gray-700 text-white"
        >
          <span class="text-xl">I</span>
        </router-link>
      </div>
    </div>
    <WishAndCartItemsContainer
      v-if="showProperty.cartItems"
      class="inline absolute top-20 z-0 right-7"
    />
    <Profile
      v-if="showProperty.profileView"
      class="inline absolute top-20 z-0 right-0"
    />

    <WishAndCartItemsContainer
      v-if="showProperty.cartItems"
      class="inline absolute top-20 z-0 right-5"
    />

    <Notifications
      v-if="showProperty.notification"
      class="inline absolute top-20 z-0 right-5"
    />
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import {
  amountOfCartedItems,
  amountOfWishedItems,
} from "../../script/Cart/purchase";
import { discloseModal } from "../../script/utility/layout";

/*state*/

import { useCategoryStore } from "../../store/category";
import WishAndCartItemsContainer from "../Cart/WishAndCartItemsContainer.vue";
import Profile from "../Utility/Profile.vue";
import Notifications from "../modal/Notifications.vue";

/*components*/

export default {
  name: "SearchAndCartNav",
  components: {
    WishAndCartItemsContainer,
    Profile,
    Notifications,
  },

  setup() {
    /*category*/
    const { availableCategories } = useCategoryStore();
    let modalShow = ref(false);
    /*close and disclose wish and cart items*/
    let showProperty = ref({
      wishItems: false,
      cartItems: false,
      profileView: false,
      notification: false,
    });

    return {
      amountOfCartedItems,
      amountOfWishedItems,
      /*categories*/
      availableCategories,
      /*modal*/
      modalShow,
      showProperty,
      discloseModal,
      /*methods*/
    };
  },
};
</script>
