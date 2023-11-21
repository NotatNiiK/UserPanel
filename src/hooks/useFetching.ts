import { ref } from "vue";
type IAnyAsyncFunction = (...args: any[]) => Promise<any>;

export const useFetching = (
  callback: IAnyAsyncFunction
): [IAnyAsyncFunction, boolean] => {
  const isLoading = ref<boolean>(false);

  const fetching = async (...data: any[]): Promise<any> => {
    try {
      isLoading.value = true;
      await callback(...data);
    } finally {
      isLoading.value = false;
    }
  };

  return [fetching, isLoading.value];
};
