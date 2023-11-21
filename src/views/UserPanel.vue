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
        <users-list :users="users" :loading="isLoading" @edit-user="editUser" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { IAlert } from "../models/alert.ts";
import UsersList from "../components/UsersList.vue";
import { IUser, IUsers } from "../models/user";

const store = useStore();

const users = ref<any>([]);
const isLoading = ref<boolean>(false);

const errorAlert = ref<IAlert>({
  show: false,
  message: "",
});

async function getUsers(): Promise<IUsers | void> {
  try {
    isLoading.value = true;
    const response = await store.dispatch("getUsers");
    if (response?.error) {
      errorAlert.value = {
        show: true,
        message: response.message,
      };
      return;
    }
    return response;
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => {
  if (!localStorage.getItem("users")) {
    users.value = await getUsers();
    localStorage.setItem("users", JSON.stringify(users.value));
    return;
  }

  users.value = JSON.parse(localStorage.getItem("users") || "");
});

function editUser(editedUser: IUser): void {
  const index = users.value.findIndex(
    (user: IUser) => user.id === editedUser.id
  );
  users.value[index] = { ...users.value[index], ...editedUser };
  localStorage.setItem("users", JSON.stringify(users.value));
}
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
