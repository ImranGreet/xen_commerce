<template>
  <section class="bg-gray-100 shadow-md">
    <div
      class="w-full min-h-screen h-fit flex flex-col justify-center items-center"
    >
      <div
        class="mx-auto h-full w-11/12 lg:w-[850px] p-8 shadow-md lg:shadow-lg bg-gray-400/10 rounded-md shadow-gray-200 border bg-white"
      >
        <h1
          class="text-lg lg:text-2xl leading-relaxed tracking-wide font-semibold text-center capitalize my-2"
        >
          Create a Account
        </h1>
        <!-- form -->
        <form
          v-on:submit.prevent="createRegistration(useUserDetails)"
          class="w-full flex flex-col justify-between space-y-4"
        >
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <FormKit
                type="email"
                v-model="email"
                validation="required|email"
                validation-visibility="live"
                label="Email"
                placeholder="Enter Your Email"
                input-class="input-element"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class=" list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
              <ErrorShow class="hidden"
                >Email Address Is Already Taken</ErrorShow
              >
            </div>
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="username"
                validation="required|text"
                validation-visibility="live"
                label="Username"
                placeholder="Enter Your Username"
                input-class="input-element"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
          </div>
          <!-- password -->

          <div class="input-element-container">
            <div class="w-full">
              <FormKit
                type="password"
                v-model="password"
                validation="required|password"
                validation-visibility="live"
                label="Password"
                placeholder="Enter Your Username"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
            <div class="w-full">
              <FormKit
                type="password"
                label="Confirm Password"
                v-model="password"
                validation="required|password"
                validation-visibility="live"
                placeholder="Enter Your Username"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
          </div>

          <!-- password end -->
          <!-- name start -->
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="firstname"
                label="First Name"
                validation="required|text"
                validation-visibility="live"
                placeholder="Enter Your first name"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="lastname"
                label="Last Name"
                validation="required|text"
                validation-visibility="live"
                placeholder="Enter Your last name"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
          </div>
          <!-- name end -->
          <!-- address info -->
          <div class="form-text">
            <h1
              class="text-xl tracking-wide font-semibold text-center capitalize"
            >
              Enter Your Address to get the delivery
            </h1>
          </div>

          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="city"
                label="City"
                validation="required|text"
                validation-visibility="live"
                placeholder="Enter Your City name"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="street"
                label="Street Name"
                validation="required|text"
                validation-visibility="live"
                placeholder="Enter Your Street Name"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
          </div>
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="street"
                label="Street number"
                validation="required|text"
                validation-visibility="live"
                placeholder="Enter Your Street Number"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="zipcode"
                label="Zipcode"
                validation="required|text"
                validation-visibility="live"
                placeholder="Enter Zipcode"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
          </div>

          <div class="input-element-container">
            <div class="w-full">
              <FormKit
                type="text"
                v-model="phone"
                label="Phone Number"
                validation="required|text"
                validation-visibility="live"
                placeholder="Enter Zipcode"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
          </div>
          <!-- address info end -->
          <!-- geolocation start -->
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="lat"
                label="Latitude"
                validation="required|text"
                validation-visibility="live"
                placeholder="Latitude"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <FormKit
                type="text"
                v-model="long"
                label="Longitude"
                validation="required|text"
                validation-visibility="live"
                placeholder="Latitude"
                input-class="input-element placeholder:text-start"
                label-class="text-lg font-semibold leading-relaxed tracking-wider"
                help-class="text-xs text-gray-500"
                messages-class="list-none p-0 mt-1 mb-0"
                message-class="text-red-500 mb-1 text-base"
              />
            </div>
          </div>
          <!-- geolocation end -->
          <!-- submit button -->
          <div class="w-full">
            <button type="submit" class="submit-button">Submit</button>
          </div>
        </form>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-3">
          I have A acount !
          <router-link
            :to="{ name: 'Login' }"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Sign In</router-link
          >
        </p>
        <!-- form end -->
      </div>
    </div>
  </section>
</template>

<script>
import { FormKit } from "@formkit/vue";
import CustomInput from "../../components/Auth/CustomInput.vue";
import CustomLabel from "../../components/Auth/CustomLabel.vue";
import ErrorShow from "../../components/Auth/ErrorShow.vue";
/*Use user registration*/
import { useUserDetails } from "../../script/Auth/registration";
import { useAuthentication } from "../../store/Auth";
export default {
  name: "Registration-form",
  components: { CustomInput, CustomLabel, ErrorShow, FormKit },

  setup() {
    const {
      email,
      username,
      password,
      phone,
      zipcode,
      name: { firstname, lastname },
      address: { city, street, number },
      Geolocation: { lat, long },
    } = useUserDetails;
    const { userUserRegistration } = useAuthentication();

    const createRegistration = async function (userInfo) {
      console.log(userInfo);
      await userUserRegistration(userInfo);
    };
    return {
      email,
      username,
      password,
      firstname,
      lastname,
      city,
      street,
      number,
      lat,
      long,
      zipcode,
      phone,
      useUserDetails,
      createRegistration,
      userUserRegistration,
    };
  },
};
</script>
