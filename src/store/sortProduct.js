import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useSortProducts = defineStore("sortProducts", () => {
  const products = ref([]);
  const sortedProducts = computed(() => products.value);
  const retrieveProducts = async function () {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?sort=desc"
      );
      products.value = response.data;
      
    } catch (error) {}
  };
  return {
    products,
    sortedProducts,
    retrieveProducts,
  };
});

export { useSortProducts };
