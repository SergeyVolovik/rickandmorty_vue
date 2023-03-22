<template>
  <div class="w-full flex sm:w-96">
    <Input
      :modelValue="inputValue"
      class="border border-gray-400 border-r-0 rounded-l-md focus:border-black"
      @keypress="handleKeyPress"
      @update:modelValue="handleInput"
    />
    <Button
      btnClassName="p-3 px-4 border border-black rounded-r-md hover:bg-gray-500 hover:text-white"
      @action="handleClick"
    >
      Search
    </Button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { Input, Button } from '@/components';
import { scrollToTop, trimValue } from '@/utils';

export default {
  components: {
    Input,
    Button
  },
  emits: ['search'],
  setup(props, { emit }) {
    const inputValue = ref('');
    const prevInputValue = ref('');

    const isNotSameValue = computed(() => prevInputValue.value !== inputValue.value);
    const setPrevInputValue = () => (prevInputValue.value = inputValue.value);

    const handleClick = () => {
      setPrevInputValue();
      emit('search', { name: trimValue(inputValue.value) });
    };

    const handleKeyPress = event => {
      if (event.keyCode === 13 && isNotSameValue.value) {
        scrollToTop();
        setPrevInputValue();
        emit('search', { name: inputValue.value });
      }
    };

    const handleInput = event => {
      const trimmedValue = trimValue(event.target.value);
      inputValue.value = trimmedValue;
    };

    return {
      inputValue,
      handleClick,
      handleKeyPress,
      handleInput
    };
  }
};
</script>
