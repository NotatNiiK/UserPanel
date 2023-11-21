<template>
  <div class="panel">
    <v-container>
      <div class="panel__body">
        <h1 class="panel__title">Users panel:</h1>
        <v-alert
          v-if="errorAlert.show"
          type="error"
          :text="errorAlert.message"
        ></v-alert>
        <users-list :users="store.state.users" :loading="isLoading" />
        <the-pagination
          :total-pages="2"
          @change-page="changePage"
          :current-page="currentPage"
        />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { IPageParams } from "../models/api.response.ts";
import { IAlert } from "../models/alert.ts";
import UsersList from "../components/UsersList.vue";
import ThePagination from "../components/ThePagination.vue";

const store = useStore();

const currentPage = ref<number>(1);
const perPage = ref<number>(6);
const isLoading = ref<boolean>(false);

const errorAlert = ref<IAlert>({
  show: false,
  message: "",
});

async function getUsers(pageParams: IPageParams): Promise<void> {
  try {
    isLoading.value = true;
    const response = await store.dispatch("getUsers", pageParams);
    if (response?.error) {
      errorAlert.value = {
        show: true,
        message: response.message,
      };
    }
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => {
  await getUsers({ page: currentPage.value, per_page: perPage.value });
});

function changePage(page: number): void {
  currentPage.value = page;
}

watch(currentPage, async (newValue: number) => {
  await getUsers({ page: newValue, per_page: perPage.value });
});
</script>

<style scoped lang="scss">
.panel {
  height: 100%;
  padding: 80px 0 30px;
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
}
</style>
