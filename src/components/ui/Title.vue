<template>
  <component :is="variant">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'h1'
    }
  }
};
</script>
