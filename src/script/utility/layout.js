import { ref } from "vue";
let fullWidth = ref(false);
const fullWindow = function () {
  fullWidth.value = true;
};

const halfScreen = function () {
  fullWidth.value = false;
};

export { fullWidth, fullWindow, halfScreen };
