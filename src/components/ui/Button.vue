<template>
  <button
    :class="btnClassName"
    @click="$emit('action')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['action'],
  props: {
    btnClassName: {
      type: String,
      default: 'p-3 px-4 bg-black text-white rounded-md hover:bg-gray-500'
    }
  }
};
</script>
