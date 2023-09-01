import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useProductDetails = defineStore("productDetails", () => {
  const productInformation = ref(null);
  const productInformationDetails = computed(() => productInformation.value);
  const retrieveProductInformation = async function (id) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      productInformation.value = response.data;
    } catch (error) {}
  };
  return {
    productInformation,
    productInformationDetails,
    retrieveProductInformation,
  };
});

export { useProductDetails };
