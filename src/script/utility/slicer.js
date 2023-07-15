import { ref } from "vue";

export class Slicer {
  product = ref([]);
  constructor(proByCat) {
    this.product = proByCat;
  }
  rightSlicer() {
    console.log(this.product);
  }
  leftSlicer() {
    console.log(this.product);
  }
}
