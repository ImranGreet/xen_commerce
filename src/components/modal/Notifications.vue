<template>
  <div
    class="w-[400px] bg-slate-50 hover:shadow-md  border rounded-md hover:delay-300 lg:ease-in-out lg:duration-300 mx-auto mt-5"
  >
    <div class="w-full py-4">
      <div class="flex justify-between items-start gap-x-2 px-3">
        <h2 class="text-lg tracking-wide leading-7">Notifications</h2>

        <router-link
          to="#"
          class="text-xl tracking-tight leading-7 font-semibold text-purple-700"
        >
          Settings
        </router-link>
      </div>
    </div>
    <!-- notice toggler -->
    <div class="flex flex-col justify-between">
      <div
        class="flex justify-between items-end border-b border-gray-700/20 px-8 py-2 w-full"
      >
        <button class="text-lg font-semibold tracking-normal leading-7">
          Customer
        </button>
        <button class="text-lg font-semibold tracking-normal leading-7">
          Store Owner
        </button>
      </div>
      <!-- notice toggler end -->
      <div class="py-3">
        <h2 class="text-xl tracking-wide text-center leading-7 font-semibold">
        No Notifications
      </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  setup() {
    return {};
  },
};
</script>
