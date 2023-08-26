<template>
  <section class="h-auto w-96 divide-y-2 divide-gray-400/20 py-6 shadow-2xl">
    <div class="flex items-center justify-between gap-x-6 px-4 py-3">
      <div class="w-24 h-24 ring-1 ring-red-400 rounded-full flex flex-col justify-center items-center">
        <img
          :src="profilePhoto"
          alt=""
          class="h-[90px] w-[90px]  rounded-full "
        />
      </div>
      <div class="space-y-2">
        <router-link
          to="#"
          class="text-lg font-bold tracking-wide text-gray-900"
        >
          {{ username }}
        </router-link>
        <p>{{ email }}</p>
      </div>
    </div>
    <div class="flex flex-col items-start justify-start gap-y-2 p-4">
      <router-linkyarn
        class="text-lg capitalize tracking-wider"
        to="#"
        v-for="(link, index) in cart"
        :key="index"
      >
        {{ link }}
      </router-linkyarn>
    </div>
    <!-- account -->
    <div class="flex flex-col items-start justify-start gap-y-2 p-4">
      <router-link
        class="text-lg capitalize tracking-wider"
        to="#"
        v-for="(link, index) in settings"
        :key="index"
      >
        {{ link }}
      </router-link>
    </div>
    <!-- auth -->
    <div class="flex flex-col items-start justify-start gap-y-2 p-4">
      <router-link
        class="text-lg capitalize tracking-wider"
        to="#"
        v-for="(link, index) in auth"
        :key="index"
      >
        {{ link }}
      </router-link>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Profile",
  setup() {
    const profileInformation = ref({
      id: 1,
      name: "Imran",
      e_mail: "greetimran@gmail.com",
      imageText:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cart: ["cart", "wish", "store"],
      account_settings: [
        "account-setting",
        "payment methods",
        "xenmesh credits",
      ],
      user_auth: ["edit profile", "logout"],
    });
    const {
      id,
      name: username,
      e_mail: email,
      imageText: profilePhoto,
      cart,
      account_settings: settings,
      user_auth: auth,
    } = profileInformation.value;
    return {
      username,
      email,
      profilePhoto,
      cart,
      settings,
      auth,
    };
  },
};
</script>
