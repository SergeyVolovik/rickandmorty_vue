<template>
  <Filter @search="search" />
  <Cards
    :characters="characters?.results"
    :isShownLoader="isLoading"
  >
    <template #pagination>
      <Pagination
        v-if="characters?.info?.pages > defaultPageNumber"
        :paginationData="characters?.info"
        :currentPage="selectedPage"
        @selectPage="selectPage"
      />
    </template>
  </Cards>
</template>

<script>
import { ref, computed } from 'vue';
import { api, paths } from '@/api';
import { Filter, Cards } from '@/sections';
import { Pagination } from '@/features';
import { defaultPageNumber } from '@/constants';
import { useApiRequest } from '@/hooks';
import { scrollToTop } from '@/utils';

export default {
  components: {
    Filter,
    Cards,
    Pagination
  },
  setup() {
    const characters = ref([]);
    const specie = ref('');
    const characterName = ref('');
    const selectedPage = ref(defaultPageNumber);

    const [getCharacters, isFetchingCharacters] = useApiRequest(async () => {
      const { data } = await api.get(paths.CHARACTERS);
      characters.value = data ?? [];
    });
    getCharacters();

    const setSearchQueryParams = (btnName, name) => {
      characters.value = [];
      selectedPage.value = defaultPageNumber;
      characterName.value = name === '' ? '' : name || characterName.value;
      specie.value = btnName || specie.value;

      if (specie.value === 'all') specie.value = '';
    };

    const [search, isSearching] = useApiRequest(async payload => {
      scrollToTop();

      const { btnName, name } = payload;
      setSearchQueryParams(btnName, name);

      const { data } = await api.get(
        paths.NAME_AND_SPECIES(selectedPage.value, characterName.value, specie.value)
      );
      characters.value = data ?? [];
    });

    const [selectPage, isFetchingByPage] = useApiRequest(async page => {
      scrollToTop();

      const { data } = await api.get(
        paths.NAME_AND_SPECIES(page, characterName.value, specie.value)
      );
      characters.value = data ?? [];
    });

    const isLoading = computed(() => {
      return isFetchingCharacters.value || isSearching.value || isFetchingByPage.value;
    });

    return {
      defaultPageNumber,
      characters,
      specie,
      characterName,
      selectedPage,
      selectPage,
      search,
      isLoading
    };
  }
};
</script>
