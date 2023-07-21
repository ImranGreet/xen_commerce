<template>
  <div>
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String || Number || Object,
      required: true,
    },
    value: {
      type: String || Number || Object,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      required: true,
    },
    placeholder: {
      type: String || Number || Object,
      default: false,
    },
  },
  setup(props) {
    const {
      placeholder,
      name,
      required,
      readonly,
      label,
      type,
      value,
      disabled,
    } = props;
    return {
      label,
      placeholder,
      name,
      required,
      readonly,
      type,
      value,
      disabled,
    };
  },
};
</script>
