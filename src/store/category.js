import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);

  const availableCategories = computed(() => categories.value);

  async function retriveCategories() {
    const cat = await axios.get(`https://fakestoreapi.com/products/categories`);
    categories.value = cat.data;
  }

  return { categories, availableCategories, retriveCategories };
});
