<template>
  <div class="w-full absolute top-0 left-0 bg-white text-black font-semibold z-50 inset-0">
    <div class="flex justify-center items-center space-x-4">
      <span class="text-2xl sm:text-3xl">Loading</span>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { Spinner } from './../icon';

export default {
  components: {
    Spinner
  }
};
</script>
