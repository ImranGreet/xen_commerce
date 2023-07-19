import { ref } from "vue";

class Modal {
  showModalOnScreen = ref(false);
  showModal() {
    this.showModalOnScreen.value
      ? !this.showModalOnScreen.value
      : this.showModalOnScreen.value;
  }
}
const togglingOnModal = new Modal();
export { togglingOnModal };
