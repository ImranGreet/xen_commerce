<template>
  <div class="text-start p-3 bg-slate-300/50 rounded-sm max-w-2xl">
    <div class="flex justify-between items-center py-2">
      <h2 class="text-xl tracking-wide py-2 underline underline-offset-2">
        Carted Items
      </h2>
      <button class="text-xl">X</button>
    </div>

    <!-- items -->
    <div
      class="flex flex-col justify-between w-full bg-slate-100 rounded-md space-y-2 divide-y-2"
      :class="{ 'overflow-y-auto h-96': wishedList.length > 4 }"
    >
      <div
        class="flex justify-between items-start w-11/12 mx-auto gap-x-2 py-3 px-2 mt-2"
        v-for="item in wishedList"
        :key="item.id"
      >
        <div
          class="w-24 h-24 rounded-md flex flex-col justify-center items-center border border-gray-600/40"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1681412205520-49c7f9b8b67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
            class="w-3/4 h-3/4 border border-gray-600 rounded-lg object-cover"
          />
        </div>
        <div class="flex flex-col justify-between items-start">
          <div class="text-start">
            <h3 v-if="item.title.length > 34">
              {{ item.title.slice(0, 30) }}...
            </h3>
            <h3 v-else>{{ item.title }}</h3>
            <small class="text-sm tracking-wider">{{ item.category }}</small>
          </div>

          <div class="flex justify-start gap-x-2 items-center">
            <small class="text-sm tracking-wider">Quantity</small>
            <input
              type="number"
              placeholder="1"
              class="w-12 focus:outline-none rounded-md"
            />
          </div>
        </div>
        <!-- operation -->
        <div class="flex flex-col justify-between text-start items-start">
          <h4 class="text-blue-600 text-lg">$ {{ item.price }}</h4>
          <button class="text-blue-600">Move To Cart</button>
          <button class="text-red-600">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { wishedList } from "../../script/Cart/purchase";

export default {
  name: "showCartedAndWished",
  setup() {
    return {
      wishedList,
    };
  },
};
</script>
