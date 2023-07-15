<template>
  <section class="flex w-full flex-col items-center justify-between md:block">
    <Showcase class="order-2 w-full"></Showcase>
    <RelatedProducts
      class="order-3 ml-10 w-full md:my-6 md:ml-16 md:w-3/5 xl:ml-24"
    >
    </RelatedProducts>
    <Card class="order-1 block md:hidden"></Card>
  </section>
</template>

<script>
import { provide } from "vue";
/*components*/
import Showcase from "../components/ProductDetails/Showcase.vue";
import Card from "../components/ProductDetails/Card.vue";
import DescriptionBox from "../components/ProductDetails/DescriptionBox.vue";
import RelatedProducts from "../components/ProductDetails/RelatedProducts.vue";
/*store*/
import { useProductDetails } from "../store/productDetails";

export default {
  name: "ProductDetails",
  components: { Showcase, Card, DescriptionBox, RelatedProducts },
  setup() {
    const { productInformationDetails } = useProductDetails();
    
    const { id, title, image, price, description, rating, category } =
      productInformationDetails;

    //provide for reduce using of props
    provide("productDescription", description);
    provide("image", image);
    provide("price", price);
    provide("pro-id", id);
    provide("pro-category", category);
    provide("productInformation", productInformationDetails);
    provide("pro-title", title);

    return {
      productInformationDetails,
    };
  },
};
</script>
