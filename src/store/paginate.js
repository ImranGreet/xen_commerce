import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const usePaginationOnProducts = defineStore("product-paginate", () => {
  const products = ref([]);
  const productsInLimit = computed(() => products.value);
  const retriveProductsInLimit = async function (limit) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      products.value = response.data;
    } catch (error) {}
  };

  return {
    products,
    productsInLimit,
    retriveProductsInLimit,
  };
});

export { usePaginationOnProducts };
