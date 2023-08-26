<template>
  <div
    class="px-4 py-5 bg-inherit text-gray-800 shadow-sm shadow-gray-700 w-[550px] h-auto flex flex-col justify-evenly gap-y-5"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-xl font-semibold tracking-wide capitalize">
        Choose a langauge
      </h1>
      <button
        @click="hideModalInClick()"
        class="text-lg hover:text-gray-800 text-gray-600"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <!-- langauges you can select one of them -->
    <ul class="grid grid-cols-4 w-11/12 mx-auto gap-x-3 gap-y-5">
      <li v-for="language in availableLanguages" :key="language">
        <router-link
          to="#"
          class="text-lg text-gray-700 leading-7 tracking-wide capitalize lg:hover:underline lg:hover:underline-offset-4"
          >{{ language }}</router-link
        >
      </li>
    </ul>
    <!-- langauges you can select one of them end -->
  </div>
</template>

<script>
export default {
  name: "Language-selection",
  setup() {
    const availableLanguages = [
      "English",
      "Chinese",
      "Hindi",
      "Spanish",
      "French",
      "Arabic",
      "Bengali",
      "Russian",
      "Portuguese",
      "Urdu",
      "Indonesian",
      "German",
      "Italian",
      "Japanese",
      "Punjabi",
      "Korean",
      "Turkish",
    ];
    let showModal = false;
    const hideModalInClick = () => {
      if (!showModal) {
        showModal = true;
        
        return showModal;
      }
      if (showModal) {
        showModal = false;
        return showModal;
      }
    };

    return {
      availableLanguages,
      showModal,
      hideModalInClick,
    };
  },
};
</script>
