<template>
  <div class="flex border border-black rounded-md overflow-x-auto">
    <Button
      v-for="btn in btnGroup"
      :key="btn.name"
      :btnClassName="getBtnActiveClassName(btn.name)"
      class="p-3 px-4 flex-1 border-r border-black rounded-none last:border-0"
      @action="selectBtnName(btn.name)"
    >
      {{ btn.label }}
    </Button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Button } from '@/components';

export default {
  components: {
    Button
  },
  emits: ['action'],
  props: {
    btnGroup: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const selectedBtnName = ref(props.btnGroup[0].name);

    const selectBtnName = btnName => {
      if (selectedBtnName.value !== btnName) {
        selectedBtnName.value = btnName;
        emit('action', { btnName });
      }
    };

    const getBtnActiveClassName = btnName => {
      return selectedBtnName.value === btnName
        ? 'bg-black text-white'
        : 'hover:bg-gray-500 hover:text-white';
    };

    return {
      selectBtnName,
      getBtnActiveClassName
    };
  }
};
</script>
