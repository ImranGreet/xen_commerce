import { AlertMessage } from "./alert";
import { cartedList, wishedList } from "./purchase";

export class OperationOnCartAndWishedList {
  /*move product to wish,cart list*/
  moveProductToWish(product) {
    AlertMessage("Product Move to Wish List").message();

    wishedList.value.push(product);
  }

  moveProductToCart(product) {
    AlertMessage("Product Move to Wish List").message();
    wishedList.value.push(product);
  }

  /*move product to wish,cart list*/

  saveForLater(product) {
    new AlertMessage("Product Move to Wish List").message();

    wishedList.value.push(product);
  }

  /*remove product from wish list*/
  removeProductFromWish(product) {
    this.productValidation(product);
    if (wishedList.value.includes(product)) {
      new AlertMessage("Wish").removeFromdesiredPurchaseStore();
      return;
    }
    wishedList.value.push(product);
  }

  /*remove product from cart list*/
  removeProductFromCart(product) {
    this.productValidation(product);
    if (cartedList.value.includes(product)) {
      new AlertMessage("Cart").removeFromdesiredPurchaseStore();
      return;
    }
    cartedList.value.push(product);
  }
}
