<template>
  <section class="w-full space-y-2 divide-y-2 divide-gray-600/20">
    <h1 class="my-2 block text-xl font-semibold tracking-wider">
      Related Products
    </h1>
    <div
      v-for="pro in relatedProducts"
      :key="pro.id"
      class="flex w-full flex-row items-center justify-between gap-x-12 py-2 pr-2"
    >
      <div class="flex w-full items-center justify-start md:w-3/5 md:gap-x-3">
        <img
          class="h-12 w-12 rounded-sm lg:h-20 lg:w-20"
          :src="pro.image"
          :alt="pro.title"
        />
        <router-link
          :to="{ name: `product-details`, params: { productId: pro.id } }"
          class="break-words lg:hover:underline lg:hover:decoration-gray-400/20 lg:hover:decoration-2 lg:hover:underline-offset-2"
        >
          {{ pro.title }}
        </router-link>
      </div>
      <div
        class="flex w-full flex-col items-start justify-between gap-y-2 text-sm font-semibold md:w-2/5 md:text-xl lg:flex-row lg:gap-x-3"
      >
        <p>
          {{ Number(pro.rating.rate) }}
          <span class="text-yellow-600">
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>
        </p>
        <p>
          <span><font-awesome-icon icon="fa-solid fa-users" /></span>
          {{ Number(pro.rating.count) }}
        </p>
        <p>
          <span>$</span>
          {{ pro.price }}
        </p>
        <button
          v-if="wishedList.includes(pro)"
          type="button"
          disabled
          @click="purchaseOperationController.addProductToWish(pro)"
          class="h-10 w-10 rounded-full border border-gray-600 lg:hover:bg-gray-200/40 cursor-not-allowed"
        >
          <span class="text-sm lg:text-lg">
            <font-awesome-icon icon="fa-regular fa-heart" />
          </span>
        </button>

        <button
          v-else
          type="button"
          @click="purchaseOperationController.addProductToWish(pro)"
          class="h-10 w-10 rounded-full border border-gray-600 lg:hover:bg-gray-200/40 cursor-pointer"
        >
          <span class="text-sm lg:text-lg">
            <font-awesome-icon icon="fa-regular fa-heart" />
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { inject } from "vue";
import { useProductsStore } from "../../store/productstore";
import {
  purchaseOperationController,
  wishedList,
} from "../../script/Cart/purchase";

export default {
  name: "RelatedProducts",

  setup() {
    const { allProducts, retrieveProductsCollection } = useProductsStore();

    const productId = inject("pro-id");
    const productCategory = inject("pro-category");
    const relatedProducts = allProducts.filter(
      (pro) => pro.id !== productId && pro.category === productCategory
    );
    return {
      relatedProducts,
      purchaseOperationController,
      wishedList,
    };
  },
};
</script>
