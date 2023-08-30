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
        <form class="w-full flex flex-col justify-between space-y-4">
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <label for="email" class="input-element-label">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="input-element"
              />
              <ErrorShow class="hidden"
                >Email Address Is Already Taken</ErrorShow
              >
            </div>
            <div class="w-full lg:w-1/2">
              <label
                for="email"
                class="text-lg font-semibold leading-relaxed tracking-wider"
                >Email</label
              >
              <input
                type="text"
                placeholder="Enter Your Username"
                class="input-element"
              />
            </div>
          </div>
          <!-- password -->

          <div class="input-element-container">
            <div class="w-full">
              <label
                for="email"
                class="text-lg font-semibold leading-relaxed tracking-wider"
                >Password</label
              >
              <input
                type="text"
                placeholder="Enter Your Username"
                class="input-element"
              />
            </div>
          </div>
          <!-- password end -->
          <!-- name start -->
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <label for="email" class="input-element-label">First Name</label>
              <input
                type="email"
                placeholder="Enter Your first name"
                class="input-element"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <label for="email" class="input-element-label">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your last name"
                class="input-element"
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
              <label for="city" class="input-element-label">City</label>
              <input
                type="text"
                placeholder="Enter Your city name"
                class="input-element"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <label for="street" class="input-element-label"
                >Street Name</label
              >
              <input
                type="text"
                placeholder="Enter Your street name"
                class="input-element"
              />
            </div>
          </div>
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <label for="street number" class="input-element-label"
                >Street number</label
              >
              <input
                type="text"
                placeholder="Enter Your street number "
                class="input-element"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <label for="text" class="input-element-label">Zipcode</label>
              <input
                type="text"
                placeholder="Enter Zipcode"
                class="input-element"
              />
            </div>
          </div>

          <div class="input-element-container">
            <div class="w-full">
              <label for="phone" class="input-element-label"
                >Phone Number</label
              >
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                class="input-element placeholder:text-start"
              />
            </div>
          </div>
          <!-- address info end -->
          <!-- geolocation start -->
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <label for="street number" class="input-element-label"
                >Latitude</label
              >
              <input
                type="text"
                placeholder="latitude "
                class="input-element"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <label for="text" class="input-element-label">Longitude</label>
              <input
                type="text"
                placeholder="longitude "
                class="input-element"
              />
            </div>
          </div>
          <!-- geolocation end -->
          <!-- submit button -->
          <div class="w-full">
            <button class="submit-button">Submit</button>
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
import CustomInput from "../../components/Auth/CustomInput.vue";
import CustomLabel from "../../components/Auth/CustomLabel.vue";
import ErrorShow from "../../components/Auth/ErrorShow.vue";

export default {
  name: "Registration-form",
  components: { CustomInput, CustomLabel, ErrorShow },

  setup() {
    const FirstName = "Imran Hossain";
    return {
      FirstName,
    };
  },
};
</script>
