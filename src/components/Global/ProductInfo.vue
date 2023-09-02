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
      <button
        type="button"
        :class="{
          'block text-lg uppercase tracking-wide absolute top-2 right-6':
            wishButton,
          hidden: !wishButton,
        }"
      >
        <span
          class="w-8 h-8 rounded-full bg-slate-200 flex flex-col justify-center items-center text-gray"
          ><font-awesome-icon icon="fa-regular fa-heart "
        /></span>
      </button>

      <div
        :class="{
          'product-purchase-button-container ': !wishButton,
          hidden: wishButton,
        }"
      >
        <button
          v-bind:disabled="cartedList.includes(product)"
          type="button"
          class="text-lg uppercase tracking-wide"
          :class="{
            'cursor-not-allowed': cartedList.includes(product),
            'cursor-pointer': !cartedList.includes(product),
          }"
          @click="purchase.addProductToCart(product)"
        >
          <span><font-awesome-icon icon="fa-solid fa-cart-plus" /></span>
        </button>

        <button
          type="button"
          v-bind:disabled="wishedList.includes(product)"
          class="text-lg uppercase tracking-wide"
          :class="{
            'cursor-not-allowed': wishedList.includes(product),
            'cursor-pointer': !wishedList.includes(product),
          }"
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
import { wishButton } from "../../script/utility/layout";

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
      /*show and hide wish button on wish page*/
      wishButton,
    };
  },
};
</script>
