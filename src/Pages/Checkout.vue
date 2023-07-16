<template>
  <section>
    <div class="flex flex-col">
      <PaymentProcess />
      <OrderDetails />
    </div>
    <Summary />
  </section>
</template>

<script>
import OrderDetails from "../components/Cart/OrderDetails.vue";
import PaymentProcess from "../components/Cart/PaymentProcess.vue";
import Summary from "../components/Cart/Summary.vue";

export default {
  name: "Checkout",
  components: {
    PaymentProcess,
    OrderDetails,
    Summary,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
