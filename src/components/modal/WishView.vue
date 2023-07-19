<template>
  <div class="flex justify-between">
    <div class="cart border border-gray-700/25 rounded p-2">
      <h2 class="text-xl font-bold mb-4">Your Cart</h2>
      <div v-if="cartItems.length === 0" class="text-gray-500">
        Your cart is empty.
      </div>
      <div v-else>
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex items-center py-4 border-b border-gray-200"
        >
          <img :src="item.image" alt="Product Image" class="w-16 h-16 mr-4" />
          <div class="flex-grow">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
            <div class="flex items-center mt-2">
              <span class="mr-2 font-semibold">Quantity:</span>
              <input
                type="number"
                v-model="item.quantity"
                min="1"
                class="w-16 py-1 px-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="font-semibold mb-1">${{ item.price }}</span>
            <button
              @click="removeFromCart(item.id)"
              class="text-red-500 underline"
            >
              Remove
            </button>
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <button
            @click="checkout"
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartPrice from "../Cart/CartPrice.vue";
export default {
  components: { CartPrice },
  data() {
    return {
      cartItems: [
        {
          id: 1,
          title: "Product 1",
          description: "Lorem ipsum dolor sit amet",
          image:
            "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80",
          price: 19.99,
          quantity: 1,
        },
        {
          id: 2,
          title: "Product 2",
          description: "Consectetur adipiscing elit",
          image:
            "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80",
          price: 24.99,
          quantity: 2,
        },
        // Add more cart items as needed
      ],
    };
  },
  methods: {
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },
    checkout() {
      // Handle checkout logic here
    },
  },
};
</script>

<style scoped>
.cart {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.cart img {
  object-fit: cover;
}

.cart input[type="number"]::-webkit-inner-spin-button,
.cart input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.cart input[type="number"] {
  -moz-appearance: textfield;
}
</style>
