<template>
  <div class="flex flex-col justify-between items-start px-4 py-3">
    <div
      class="w-full lg:w-[400px] bg-slate-50 hover:shadow-md py-5 border rounded-md hover:delay-300 lg:ease-in-out lg:duration-300 mx-auto"
    >
      <div class="w-full lg:w-[350px] mx-auto bg-inherit">
        <div class="w-full">
          <div class="flex justify-center items-start gap-x-2">
            <img
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              class="w-24 h-24 rounded-sm"
            />
            <div class="flex flex-col">
              <h1 class="text-xl tracking-wide leading-7 font-semibold">
                Mastering OpenAI Python APIs...
              </h1>
              <small class="text-[16px] font-bold">Electronics</small>
              <small class="text-[16px] font-bold">$180</small>
            </div>
          </div>
          <!-- purchase button -->
          <button
            class="w-full px-4 py-2 mt-2 block leading-relaxed tracking-wide text-center text-gray-500 border border-gray-500 bg-white shadow-sm hover:bg-slate-600 hover:text-white focus:outline-none hover:delay-100 lg:ease-in-out lg:duration-200 rounded-sm"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  setup() {
    return {};
  },
};
</script>
