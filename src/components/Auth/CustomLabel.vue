<template>
  <label
    :for="name"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
    >{{ labelText }}</label
  >
</template>

<script>
export default {
  name: "CustomLabel",
  props: {
    name: {
      type: String || Object || Number,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { name, labelText } = props;
    return {
      name,
      labelText,
    };
  },
};
</script>
