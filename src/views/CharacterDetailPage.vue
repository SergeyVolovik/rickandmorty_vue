<template>
  <Main>
    <Container>
      <Loader v-show="isFetchingCharacter" />
      <ConditionalContent
        :visible="!!character?.id"
        placeholder="no character information"
      >
        <Card
          :cardData="character"
          cardClassName="sm:flex sm:flex-row-reverse sm:justify-between"
          cardTitleClassName="text-4xl"
          readonly
        >
          <template #cardAdditionalDescription>
            <p>Last known location: {{ character.location?.name }}</p>
            <p class="w-full max-w-sm">
              First seen in: {{ getEpisodeNumFromStr(character.episode ?? []) }}
            </p>
          </template>
        </Card>
      </ConditionalContent>
    </Container>
  </Main>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { api, paths } from '@/api';
import { Main, Container, Loader } from '@/components';
import { Card, ConditionalContent } from '@/features';
import { useApiRequest } from '@/hooks';
import { getEpisodeNumFromStr } from '@/utils';

export default {
  components: {
    Main,
    Container,
    Loader,
    ConditionalContent,
    Card
  },
  setup() {
    const route = useRoute();
    const character = ref(null);

    const [getCharacter, isFetchingCharacter] = useApiRequest(async () => {
      const { data } = await api.get(paths.CHARACTER_BY_ID(route.params?.id));
      character.value = data;
    });
    getCharacter();

    return {
      character,
      getEpisodeNumFromStr,
      isFetchingCharacter
    };
  }
};
</script>
