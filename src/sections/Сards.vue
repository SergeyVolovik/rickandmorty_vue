<template>
  <Main>
    <Container>
      <Loader v-show="isShownLoader" />
      <ConditionalContent
        :visible="characters.length > 0"
        placeholder="no cards"
        placeholderClassName="text-2xl text-center font-bold"
      >
        <Grid>
          <Card
            v-for="characterData in characters"
            :key="characterData.id"
            :cardData="characterData"
            :isFavorite="isFavorites"
          />
        </Grid>
        <slot name="pagination" />
      </ConditionalContent>
    </Container>
  </Main>
</template>

<script>
import { Main, Container, Grid, Loader } from '@/components';
import { ConditionalContent, Card } from '@/features';

export default {
  components: {
    Main,
    Container,
    Loader,
    ConditionalContent,
    Grid,
    Card
  },
  props: {
    characters: {
      type: Array,
      default: () => []
    },
    isFavorites: Boolean,
    isShownLoader: Boolean
  }
};
</script>
