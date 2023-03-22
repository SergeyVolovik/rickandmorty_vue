import { ref } from 'vue';

export const useApiRequest = callback => {
  const isLoading = ref(false);

  let handler = async (...payload) => {
    try {
      isLoading.value = true;
      await callback(...payload);
    } catch (e) {
      throw new Error(e.message);
    } finally {
      isLoading.value = false;
    }
  };

  return [handler, isLoading];
};
