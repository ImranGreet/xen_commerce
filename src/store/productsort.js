import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useProductSort = defineStore("product-sort", () => {
  const products = ref([]);
  const productsInAscendingOrDescending = computed(() => {
    products.value;
  });
  const retrieveProductsInSort = async function (sort) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?sort=${sort}`
      );
      products.value = response.data;
    } catch (error) {}
  };
  return {
    products,
    productsInAscendingOrDescending,
    retrieveProductsInSort,
  };
});

export { useProductSort };
