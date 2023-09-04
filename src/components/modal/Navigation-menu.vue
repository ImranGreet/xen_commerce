<template>
  <section
    class="w-11/12 mx-auto sm:w-96 sm:mx-0 bg-white border-r border-gray-200"
  >
    <div class="px-2 py-2 bg-slate-100">
      <div class="w-full flex flex-col justify-between">
        <div class="flex justify-between items-center gap-x-4">
          <div
            class="w-16 h-16 rounded-full ring-red-400 ring-1 flex flex-col justify-center items-center"
          >
            <img
              :src="profileImage"
              :alt="profileName"
              class="w-14 h-14 rounded-full"
            />
          </div>
          <div class="flex flex-col justify-center items-start">
            <h3
              class="text-xl tracking-wide leading-relaxed font-semibold text-gray-800"
            >
              {{ profileName }}
            </h3>
            <small
              class="text-md tracking-wider leading-7 font-semibold text-blue-700"
              >Welcome Back</small
            >
          </div>
          <button class="hover:text-gray-800">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>

    <!-- open your store -->
    <div class="px-2 py-5">
      <router-link
        to="#"
        class="text-xl tracking-wide leading-7 text-purple-800 font-semibold"
        >Open A Store</router-link
      >
    </div>

    <div
      class="flex flex-col justify-between items-start px-2 py-2 border-t border-b border-gray-400/40"
    >
      <router-link to="#" class="text-lg leading-relaxed tracking-wider"
        >Wished Items</router-link
      >
      <router-link to="#" class="text-lg leading-relaxed tracking-wider"
        >Carted Items</router-link
      >
    </div>
    <!-- navigation-menu -->
    <ul class="flex flex-col justify-between items-stretch px-2 py-3">
      <li v-for="cat in availableCategories" :key="cat">
        <router-link
          to="#"
          class="text-lg text-gray-700 leading-7 tracking-wide capitalize"
          >{{ cat }}</router-link
        >
      </li>
    </ul>
    <!-- end navigation menu -->
    <!-- more option -->
    <div class="border-t border-gray-300">
      <!-- navigation-menu -->
      <ul class="flex flex-col justify-between items-stretch px-2 text-lg py-3">
        <li>
          <router-link to="#" class="text-gray-700 leading-7 tracking-wide"
            >Business With Us</router-link
          >
        </li>
        <li>
          <router-link to="#" class="text-gray-700 leading-7 tracking-wide"
            >Invite Friends</router-link
          >
        </li>

        <li>
          <router-link to="#" class="text-gray-700 leading-7 tracking-wide"
            >Get The App</router-link
          >
        </li>
        <li>
          <router-link to="#" class="text-gray-700 leading-7 tracking-wide"
            >Need Help</router-link
          >
        </li>

        <li class="mt-4">
          <router-link
            to="#"
            class="text-gray-700 leading-7 tracking-wide border border-gray-900/40 px-8 py-2"
            ><font-awesome-icon icon="fa-solid fa-globe" /><span class="ml-2"
              >English</span
            ></router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { useCategoryStore } from "../../store/category";

export default {
  name: "Navigation-menu",
  setup() {
    const profileImage =
      "https://images.unsplash.com/photo-1692014956531-8f0cc309a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
    const profileName = "Xennifer Rahman";
    const { availableCategories } = useCategoryStore();
    return {
      profileImage,
      profileName,
      /*categories*/
      availableCategories,
    };
  },
};
</script>
