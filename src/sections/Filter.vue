<template>
  <div class="mt-1 py-6 sticky top-18 bg-gray-100 z-10">
    <Container
      class="flex flex-col space-y-6 sm:flex-row sm:items-center sm:space-x-8 sm:space-y-0"
    >
      <ButtonGroup
        :btnGroup="species"
        @action="$emit('search', $event)"
      />
      <SearchInput @search="$emit('search', $event)" />
    </Container>
  </div>
</template>

<script>
import { Container } from '@/components';
import { SearchInput, ButtonGroup } from '@/features';
import { species } from '@/constants';

export default {
  components: {
    Container,
    SearchInput,
    ButtonGroup
  },
  emits: ['search'],
  setup() {
    return {
      species
    };
  }
};
</script>
