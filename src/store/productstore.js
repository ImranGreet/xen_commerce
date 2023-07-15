import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useProductsStore = defineStore("productsStore", () => {
  const products = ref([]);
  const allProducts = computed(() => products.value);
  const retrieveProductsCollection = async function () {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      products.value = response.data;
    } catch (error) {}
  };
  return {
    products,
    allProducts,
    retrieveProductsCollection,
  };
});

export { useProductsStore };
