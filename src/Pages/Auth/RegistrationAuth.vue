<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Xenmesh
      </a>

      <div
        class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl capitalize font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create  account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div class="flex gap-x-3">
              <div class="space-y-2">
                <CustomLabel labelText="First name" name="firstname" />
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                  :readonly="false"
                  :disabled="false"
                  :required="true"
                  :value="FirstName"
                />
              </div>
              <div class="space-y-2">
                <CustomLabel labelText="Last name" name="lastname" />
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Enter Last Name"
                  :readonly="false"
                  :disabled="false"
                  :required="true"
                  :value="Lastname"
                />
              </div>
            </div>
          </form>
        </div>
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
