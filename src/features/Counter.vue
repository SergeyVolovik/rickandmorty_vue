<template>
  <div class="group flex items-center space-x-2">
    <Favorite class="w-5 h-5" />
    <span v-if="amount">{{ amount }}</span>
  </div>
</template>

<script>
import { Favorite } from '@/components';

export default {
  components: {
    Favorite
  },
  props: {
    amount: {
      type: Number,
      default: 0
    }
  }
};
</script>
