import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useProductsByCategory = defineStore("product_cat", () => {
  const products = ref([]);
  const productsByCategory = computed(() => products.value);
  const retrieveProductsAccordingToCat = async function (cat) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${cat}`
      );
      products.value = response.data;
    } catch (error) {
        
    }
  };

  return {
    products,
    productsByCategory,
    retrieveProductsAccordingToCat,
  };
});

export { useProductsByCategory };
