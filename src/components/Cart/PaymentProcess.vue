<template>
  <div class="bg-inherit w-full max-h-screen">
    <form>
      <h1 class="text-2xl tracking-wide leading-relaxed">Checkout</h1>
      <div>
        <div class="flex justify-between items-start">
          <h1 class="text-lg">Country</h1>
          <small>Required</small>
        </div>
        <div>
          <select name="" id="">
            <option value="Bangladesh">Bangladesh</option>
            <option value="Bangladesh">India</option>
            <option value="Bangladesh">Pakistan</option>
            <option value="Bangladesh">Myanmar</option>
            <option value="Bangladesh">China</option>
            <option value="Bangladesh">Afganistan</option>
            <option value="Bangladesh">Nepal</option>
          </select>
        </div>
      </div>
      <!-- card methods -->
      <div class="flex justify-between items-start">
        <h1 class="text-lg">Payment Methods</h1>
        <small
          >Secured Connection
          <span><font-awesome-icon icon="fa-solid fa-lock" /></span
        ></small>
      </div>
      <!-- cards -->
      <div>
        <div class="flex justify-between items-start">
          <input type="radio" name="" id="" />
          <div class="flex gap-x-0.5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
              alt=""
              class="w-10 h-10"
            />
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT"
              alt=""
              class="w-10 h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/1920px-Discover_Card_logo.svg.png"
              alt=""
              class="w-10 h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
              alt=""
              class="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PaymentProcess",
  setup() {
    return {};
  },
};
</script>

<style></style>
