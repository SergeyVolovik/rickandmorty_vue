<template>
  <VLazyImage
    :src="imgSrc || 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'"
    class="w-full h-full object-cover"
    alt="card image"
  />
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
  components: {
    VLazyImage
  },
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  }
};
</script>
