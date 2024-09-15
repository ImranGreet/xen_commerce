<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <router-link
        to="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Xenmesh
      </router-link>
      <div
        class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form
            @submit.prevent="userLoginWay(loginDetails)"
            class="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <FormKit
                type="text"
                v-model="username"
                name="username"
                id="email"
                label=" username"
                validation="required|text"
                validation-visibility="live"
                input-class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                label-class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                placeholder="name@company.com"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-sm"
              />
            </div>
            <div>
              <FormKit
                type="password"
                v-model="password"
                name="password"
                id="password"
                validation="required|password"
                validation-visibility="live"
                placeholder="••••••••"
                label="Password"
                input-class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                label-class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-sm"
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <router-link
                :to="{ name: 'Registration' }"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Sign up</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { loginDetails } from "../../script/Auth/registration";
import { useAuthentication } from "../../store/Auth";
const { useUserLogin } = useAuthentication();
const { username, password } = loginDetails;
export default {
  name: "Login",
  setup() {
    const userLoginWay = async function (payload) {
      await useUserLogin(payload);
    };
    return {
      username,
      password,
      useUserLogin,
      userLoginWay,
      loginDetails,
    };
  },
};
</script>
