import { computed, ref } from "vue";
import { AlertMessage } from "./alert";
import { OperationOnCartAndWishedList } from "./cart";

const wishedList = ref([]);
const cartedList = ref([]);

const amountOfCartedItems = computed(() => {
  return cartedList.value;
});

const amountOfWishedItems = computed(() => {
  return wishedList.value;
});

class Purchase {
  productValidation(item) {
    const typeOfProduct = typeof item;
    if (typeOfProduct !== "object") {
      new AlertMessage(
        "Product information is not valid!"
      ).productMustBeObject();
      return;
    }
  }

  /*add product to wish list*/
  addProductToWish(product) {
    console.log(product);
    this.productValidation(product);
    if (wishedList.value.includes(product)) {
      new AlertMessage("Wish").addTodesiredPurchaseStore();
      return;
    }
    wishedList.value.push(product);
  }

  /*add product to cart list*/
  addProductToCart(product) {
    this.productValidation(product);
    if (cartedList.value.includes(product)) {
      new AlertMessage("Wish").addTodesiredPurchaseStore();
      return;
    }
    cartedList.value.push(product);
  }
}
/*create instantiating */
const purchaseOperationController = new Purchase();

export {
  Purchase,
  /*properties*/
  wishedList,
  cartedList,
  amountOfCartedItems,
  amountOfWishedItems,
  /*instantiating*/
  purchaseOperationController,
};
