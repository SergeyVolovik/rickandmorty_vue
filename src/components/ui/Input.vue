<template>
  <input
    :value="modelValue"
    :type="inputType"
    :placeholder="inputPlaceholder"
    class="w-full px-3 outline-none"
    @input="$emit('update:modelValue', $event)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputPlaceholder: {
      type: String,
      default: 'Filter by name...'
    }
  },
  emits: ['update:modelValue']
};
</script>
