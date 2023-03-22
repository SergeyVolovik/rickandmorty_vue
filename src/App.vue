<template>
  <Header>
    <Container additionalClass="flex justify-between">
      <Navigation />
      <Counter :amount="amountFavorites" />
    </Container>
  </Header>
  <RouterView />
</template>

<script>
import { ref, provide } from 'vue';
import { Header, Navigation, Container } from '@/components';
import { Counter } from '@/features';

export default {
  components: {
    Header,
    Navigation,
    Container,
    Counter
  },
  setup() {
    const amountFavorites = ref(JSON.parse(localStorage.getItem('characterIds'))?.length || 0);

    const countAmountFavorites = action => {
      switch (action) {
        case 'increase':
          return (amountFavorites.value += 1);
        case 'decrease':
          return (amountFavorites.value -= 1);
        default:
          return 0;
      }
    };

    provide('countAmountFavorites', countAmountFavorites);

    return {
      amountFavorites
    };
  }
};
</script>
