<template>
  <div class="panel">
    <v-container>
      <div class="panel__body">
        <h1 class="panel__title">Users list:</h1>
        <v-alert
          v-if="errorAlert.show"
          type="error"
          :text="errorAlert.message"
        ></v-alert>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useFetching } from "../hooks/useFetching.ts";
import { IPageParams } from "../models/api.response.ts";
import { IAlert } from "../models/alert.ts";

const store = useStore();

const currentPage = ref<number>(1);
const perPage = ref<number>(6);

const errorAlert = ref<IAlert>({
  show: false,
  message: "",
});

const [getUsers, isLoading] = useFetching(async (pageParams: IPageParams) => {
  const response = await store.dispatch("getUsers", pageParams);
  if (response?.error) {
    errorAlert.value = {
      show: true,
      message: response.message,
    };
  }
});

onMounted(getUsers);
</script>

<style scoped lang="scss">
.panel {
  height: 100%;
  padding: 80px 0 30px;
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
</style>
