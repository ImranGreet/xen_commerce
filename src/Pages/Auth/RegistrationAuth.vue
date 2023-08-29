<template>
  <section class="bg-gray-100 shadow-md">
    <div
      class="w-full min-h-screen h-fit flex flex-col justify-center items-center"
    >
      <div
        class="mx-auto h-full w-11/12 lg:w-[850px] shadow-md lg:shadow-xl bg-gray-400/10 rounded-md shadow-gray-200 border"
      >
        <h1
          class="text-lg lg:text-2xl leading-relaxed tracking-wide font-semibold text-center capitalize"
        >
          Create a Account
        </h1>
        <!-- form -->
        <form
          class="w-full px-2 lg:px-5 py-3 lg:py-5 flex flex-col justify-between space-y-4"
        >
          <div class="input-element-container">
            <div class="w-full lg:w-1/2">
              <label for="email" class="input-element-label">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="input-element"
              />
              <small class="warning-text">Email Address Is Already Taken</small>
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
              <small class="warning-text">Email Address Is Already Taken</small>
            </div>
          </div>
          <!-- password -->
          <div class="w-full px-4">
            <label
              for="email"
              class="text-lg font-semibold leading-relaxed tracking-wider"
              >Password</label
            >
            <input
              type="text"
              placeholder="Enter Your Username"
              class="input-element placeholder:text-start"
            />
            <small class="warning-text">Email Address Is Already Taken</small>
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
              <small class="warning-text">Email Address Is Already Taken</small>
            </div>
            <div class="w-full lg:w-1/2">
              <label for="email" class="input-element-label">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your last name"
                class="input-element"
              />
              <small class="warning-text">Email Address Is Already Taken</small>
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
              <small class="warning-text">Email Address Is Already Taken</small>
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
              <small class="warning-text">Email Address Is Already Taken</small>
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
              <small class="warning-text">Email Address Is Already Taken</small>
            </div>
            <div class="w-full lg:w-1/2">
              <label for="text" class="input-element-label">Zipcode</label>
              <input
                type="text"
                placeholder="Enter Zipcode"
                class="input-element"
              />
              <small class="warning-text">Email Address Is Already Taken</small>
            </div>
          </div>

          <div class="w-full px-4">
            <label for="phone" class="input-element-label">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              class="input-element placeholder:text-start"
            />
            <small class="warning-text">Email Address Is Already Taken</small>
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
        <!-- form end -->
      </div>
    </div>
  </section>
</template>

<script>
import CustomInput from "../../components/Auth/CustomInput.vue";
import CustomLabel from "../../components/Auth/CustomLabel.vue";

export default {
  name: "Registration-form",
  components: { CustomInput, CustomLabel },

  setup() {
    const FirstName = "Imran Hossain";
    return {
      FirstName,
    };
  },
};
</script>
