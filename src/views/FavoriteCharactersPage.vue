<template>
  <Cards
    :characters="favoriteCharacters"
    :isShownLoader="isFetchingCharacterById"
    isFavorites
  />
</template>

<script>
import { ref, provide } from 'vue';
import { api, paths } from '@/api';
import { Cards } from '@/sections';
import { useApiRequest } from '@/hooks';
import { removeFromArrayById } from '@/utils';

export default {
  components: {
    Cards
  },
  setup() {
    const favoriteCharacters = ref([]);

    const [getCharacterById, isFetchingCharacterById] = useApiRequest(async () => {
      const characterIds = JSON.parse(localStorage.getItem('characterIds')) ?? [];
      if (!characterIds.length) return;

      const { data } = await api.get(paths.FAVORITES(characterIds));
      favoriteCharacters.value = data?.length > 0 ? data : [data];
    });
    getCharacterById();

    const removeFromFavorites = characterId => {
      favoriteCharacters.value = removeFromArrayById(favoriteCharacters.value, characterId);
    };

    provide('removeFromFavorites', removeFromFavorites);

    return {
      favoriteCharacters,
      removeFromFavorites,
      isFetchingCharacterById
    };
  }
};
</script>
