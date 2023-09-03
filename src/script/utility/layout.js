import { ref } from "vue";
import { useRouter } from "vue-router";
let fullWidth = ref(false);
import { cartedList } from "../Cart/purchase";



let wishButton = ref(false);
let noFlex = ref(false);

const fullWindow = function () {
  fullWidth.value = true;
};

const halfScreen = function () {
  fullWidth.value = false;
};

const discloseWishButton = function () {
  wishButton.value = true;
};
const closeWishButton = function () {
  wishButton.value = false;
};

const applyNoFlex = function () {
  if (cartedList.value.length > 0) {
    noFlex.value = true;
  }
  console.log(noFlex.value);
};
const applyFlex = function () {
  noFlex.value = false;
  console.log(noFlex.value);
};

export {
  fullWidth,
  wishButton,
  noFlex,
  /*methods*/
  fullWindow,
  halfScreen,
  discloseWishButton,
  closeWishButton,
  applyNoFlex,
  applyFlex,
};
