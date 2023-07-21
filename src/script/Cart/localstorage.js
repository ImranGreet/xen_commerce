import { purchaseOperationController } from "./purchase";

class UseLocalStorage {
  getItemsFromStorage(key) {
    const items = localStorage.getItem(key);
    const eligibleToBrowser = JSON.parse(items);
    return eligibleToBrowser;
  }

  setItemToStorage(key, product) {
    purchaseOperationController.productValidation(product);
    localStorage.setItem(key, product);
  }
}

export const useStorage = new UseLocalStorage();
