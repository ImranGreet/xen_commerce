<template>
  <div
    class="flex h-72 w-full animate-wiggle flex-col items-center justify-start rounded-sm"
  >
    <div class="group relative h-1/2 w-full">
      <img
        :src="imageText"
        :alt="title"
        loading="lazy"
        class="z-20 h-full w-full rounded-sm"
      />

      <div
        class="absolute inset-x-0 top-[100px] flex justify-between rounded-md bg-pink-800/70 p-1 px-2 text-white md:rounded-none md:bg-gray-800/50 lg:hover:delay-150 lg:hover:duration-200 lg:group-hover:flex xl:top-[108px] xl:hidden"
      >
        <button
          v-if="cartedList.includes(product)"
          disabled
          type="button"
          class="text-lg uppercase tracking-wide cursor-not-allowed"
          @click="purchase.addProductToCart(product)"
        >
          <span><font-awesome-icon icon="fa-solid fa-cart-plus" /></span>
        </button>

        <button
          v-else
          type="button"
          class="text-lg uppercase tracking-wide cursor-pointer"
          @click="purchase.addProductToCart(product)"
        >
          <span><font-awesome-icon icon="fa-solid fa-cart-plus" /></span>
        </button>

        <button
          v-if="wishedList.includes(product)"
          disabled
          type="button"
          class="text-lg uppercase tracking-wide cursor-not-allowed"
          @click="purchase.addProductToWish(product)"
        >
          <span><font-awesome-icon icon="fa-regular fa-heart" /></span>
        </button>

        <button
          v-else
          type="button"
          class="text-lg uppercase tracking-wide cursor-pointer"
          @click="purchase.addProductToWish(product)"
        >
          <span><font-awesome-icon icon="fa-regular fa-heart" /></span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-start justify-between gap-y-[2px]">
      <router-link
        :to="{ name: 'product-details', params: { productId: id } }"
        class="break-words text-left text-sm font-semibold leading-5 tracking-wide md:text-base lg:hover:underline lg:hover:decoration-slate-800/40 lg:hover:decoration-1 lg:hover:underline-offset-4"
      >
        {{ title }}
      </router-link>
      <p class="text-sm font-semibold capitalize tracking-wider text-stone-600">
        {{ category }}
      </p>

      <div
        class="flex justify-evenly gap-x-[1.5px] text-sm tracking-wider text-yellow-600/75"
      >
        <span>({{ Number(review.rate) }})</span>
        <span v-for="(star, index) in reviewRate" :key="index">
          <font-awesome-icon icon="fa-regular fa-star" />
        </span>
        <span>({{ Number(review.count) }})</span>
      </div>

      <h4 class="text-lg font-bold tracking-wider text-gray-800">
        ${{ price }}
      </h4>
    </div>
  </div>
</template>

<script>
import { Purchase, wishedList, cartedList } from "../../script/Cart/purchase";

export default {
  name: "ProductInfo",
  props: {
    productDetails: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      id,
      title,
      description: details,
      price,
      image: imageText,
      rating: review,
      category,
    } = props.productDetails;

    const product = props.productDetails;

    const reviewRate = Math.ceil(Number(review.rate));

    const purchase = new Purchase();

    return {
      id,
      title,
      details,
      price,
      imageText,
      review,
      category,
      reviewRate,
      /*product*/
      product,
      wishedList,
      cartedList,
      /*methods*/
      purchase,
    };
  },
};
</script>
