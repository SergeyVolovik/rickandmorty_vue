<template>
  <div
    :class="cardClassName"
    class="w-full flex flex-col border border-gray-200 rounded-md shadow overflow-hidden"
  >
    <div
      v-if="readonly"
      :class="imgContainer"
    >
      <Image
        :imgSrc="cardData?.image"
        class="max-h-72"
      />
    </div>
    <RouterLink
      v-else
      :to="`/characters/${cardData?.id}`"
      :class="imgContainer"
      class="block"
    >
      <Image
        :imgSrc="cardData?.image"
        class="max-h-72 transition-all duration-500 ease-in-out transform hover:scale-125"
      />
    </RouterLink>
    <div class="p-4 flex flex-auto flex-col sm:items-start space-y-4">
      <Title
        :class="cardTitleClassName"
        class="text-2xl font-bold"
      >
        <span v-if="readonly">{{ cardData?.name ?? 'Name' }}</span>
        <RouterLink
          v-else
          :to="`/characters/${cardData?.id}`"
          class="hover:underline"
        >
          {{ cardData?.name ?? 'Name' }}
        </RouterLink>
      </Title>
      <div class="flex-auto">
        <p>{{ cardData?.species ?? 'species' }} - {{ cardData?.status ?? 'status' }}</p>
        <slot name="cardAdditionalDescription" />
      </div>
      <Button @action="addToFavorites(cardData?.id)">
        {{ btnName }}
      </Button>
    </div>
  </div>
</template>

<script>
import { toRefs, inject, ref, computed } from 'vue';
import { Image, Title, Button } from '@/components';
import { removeFromArrayById } from '@/utils';

const storageItem = 'characterIds';
const imgContainer = 'max-h-72 overflow-hidden';

export default {
  components: {
    Image,
    Title,
    Button
  },
  props: {
    cardData: {
      type: Object,
      default: () => {}
    },
    cardClassName: {
      type: String,
      default: ''
    },
    cardTitleClassName: {
      type: String,
      default: ''
    },
    readonly: Boolean,
    isFavorite: Boolean
  },
  setup(props) {
    const { cardData, isFavorite } = toRefs(props);
    const countAmountFavorites = inject('countAmountFavorites', () => {});
    const removeFromFavorites = inject('removeFromFavorites', () => {});

    const isAddedToFavorites = ref(
      localStorage.getItem(storageItem)?.includes(cardData.value?.id) || false
    );

    const btnName = computed(() => {
      return isAddedToFavorites.value ? 'Remove from Favorites' : 'Add to Favorites';
    });

    const addToLocalStorage = param => localStorage.setItem(storageItem, param);

    const addToFavorites = characterId => {
      const favorites = JSON.parse(localStorage.getItem(storageItem)) ?? [];
      isAddedToFavorites.value = !isAddedToFavorites.value;

      if (isAddedToFavorites.value) {
        addToLocalStorage(JSON.stringify([...favorites, characterId]));
        countAmountFavorites('increase');
      } else {
        const newFavorites = removeFromArrayById(favorites, characterId);
        addToLocalStorage(JSON.stringify(newFavorites));
        countAmountFavorites('decrease');

        if (isFavorite) removeFromFavorites(characterId);
        if (!newFavorites.length) localStorage.removeItem(storageItem);
      }
    };

    return {
      imgContainer,
      btnName,
      addToFavorites
    };
  }
};
</script>
