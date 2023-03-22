<template>
  <div
    class="mt-8 flex flex-col justify-center items-center space-y-6 text-xl sm:flex-row sm:justify-end sm:space-x-4 sm:space-y-0"
  >
    <span>Page {{ currentPage || 0 }} of {{ paginationData?.pages || 0 }}</span>
    <div class="w-full flex justify-between space-x-2 sm:w-auto">
      <Button
        :btnClassName="getPaginationBtnClassName(!paginationData?.prev)"
        :disabled="!paginationData?.prev"
        @action="goToPage('prev')"
      >
        &#171; Prev
      </Button>
      <Button
        :btnClassName="getPaginationBtnClassName(!paginationData?.next)"
        :disabled="!paginationData?.next"
        @action="goToPage('next')"
      >
        Next &#187;
      </Button>
    </div>
  </div>
</template>

<script>
import { toRefs, ref } from 'vue';
import { Button } from '@/components';
import { defaultPageNumber } from '@/constants';

export default {
  components: {
    Button
  },
  emits: ['selectPage'],
  props: {
    paginationData: {
      type: Object,
      default: () => {}
    },
    selectedPage: {
      type: Number,
      default: defaultPageNumber
    }
  },
  setup(props, { emit }) {
    const { paginationData, selectedPage } = toRefs(props);
    const currentPage = ref(selectedPage.value);

    const getPaginationBtnClassName = isDisabled => {
      return isDisabled ? 'p-0 bg-transparent text-gray-500 cursor-default' : 'p-0 bg-transparent';
    };

    const goToPage = async link => {
      const isLastPage = currentPage.value === paginationData.value.pages && link !== 'prev';

      if (isLastPage || !currentPage.value) return;
      else if (link === 'next') currentPage.value += defaultPageNumber;
      else currentPage.value -= defaultPageNumber;

      emit('selectPage', currentPage.value);
    };

    return {
      getPaginationBtnClassName,
      currentPage,
      goToPage
    };
  }
};
</script>
