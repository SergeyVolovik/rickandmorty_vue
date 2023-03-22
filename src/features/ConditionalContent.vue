<template>
  <slot v-if="visible" />
  <Title
    v-else
    :class="placeholderClassName"
  >
    {{ placeholder }}
  </Title>
</template>

<script>
import { Title } from '@/components';

export default {
  components: {
    Title
  },
  props: {
    visible: Boolean,
    placeholder: {
      type: String,
      default: ''
    },
    placeholderClassName: {
      type: String,
      default: ''
    }
  }
};
</script>
