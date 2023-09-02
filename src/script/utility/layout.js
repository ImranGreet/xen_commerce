import { ref } from "vue";
let fullWidth = ref(false);

let wishButton = ref(false);

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

export {
  fullWidth,
  fullWindow,
  halfScreen,
  wishButton,
  discloseWishButton,
  closeWishButton,
};
