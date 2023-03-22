<template>
  <Main>
    <Container additionalClass="text-center">
      <Title class="mb-2 text-2xl font-bold">Not Found | 404</Title>
      <RouterLink
        to="/"
        class="underline"
      >
        Back
      </RouterLink>
    </Container>
  </Main>
</template>

<script>
import { Main, Container, Title } from '@/components';

export default {
  components: {
    Main,
    Container,
    Title
  }
};
</script>
