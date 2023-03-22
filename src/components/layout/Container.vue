<template>
  <div
    :class="additionalClass"
    class="px-6 sm:px-10 xl:px-16"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    additionalClass: {
      type: String,
      default: ''
    }
  }
};
</script>
